import { Order } from "@prisma/client";
import { prisma } from "../../../shared/prisma"
import { IPaginationOptions } from "../../../interfaces/pagination";
import { IGenericResponse } from "../../../interfaces/common";
import { paginationHelpers } from "../../../helpers/paginationHelpers";
import { orderedBooks } from "./order.interface";
import { ENUM_USER_ROLE } from "../../../enums/user";

const create = async (orderedBooks: orderedBooks[], userId: string): Promise<Order> => {
    const result = await prisma.order.create({
        data: {
            userId: userId,
            orderedBooks: orderedBooks
        }
    });

    return result;
}

const getAll = async (
    options: IPaginationOptions,
    role: string,
    id: string): Promise<IGenericResponse<Order[]>> => {
    const { page, size, skip } = paginationHelpers.calculatePagination(options);

    const andConditions = [];
    if (role === ENUM_USER_ROLE.CUSTOMER) {
        andConditions.push({
            userId: id
        })
    }

    const whereConditions = andConditions.length > 0 ? { AND: andConditions } : {};


    const result = await prisma.order.findMany({
        skip,
        take: size,
        where: whereConditions,
        orderBy: options.sortBy && options.sortOrder
            ? {
                [options.sortBy]: options.sortOrder
            }
            : {
                id: 'desc'
            }

    });

    const total = await prisma.order.count({ where: whereConditions });

    return {
        meta: {
            page: page,
            size: size,
            total: total,
            totalPage: Math.floor(total / size + 1)
        },
        data: result
    };
}



const getSingle = async (user: string, role: string, id: string): Promise<Order | null> => {

    const andConditions = [];
    if (role === ENUM_USER_ROLE.CUSTOMER) {
        andConditions.push({
            userId: user,
            id: id
        })
    }

    const whereConditions = andConditions.length > 0 ? { AND: andConditions } : {
        id: id,
    };

    const result = await prisma.order.findFirst({
        where: whereConditions

    });

    return result;
}



const deleteOne = async (id: string) => {
    const result = await prisma.order.delete({
        where: { id: id },

    })

    return result;
}


export const OrderService = {
    create,
    getAll,
    getSingle,
    deleteOne
}