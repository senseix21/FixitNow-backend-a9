import { Order } from "@prisma/client";
import { prisma } from "../../../shared/prisma"
import { IPaginationOptions } from "../../../interfaces/pagination";
import { IGenericResponse } from "../../../interfaces/common";
import { paginationHelpers } from "../../../helpers/paginationHelpers";
import { orderedBooks } from "./order.interface";

const create = async (orderedBooks: orderedBooks[], userId: string): Promise<Order> => {
    const result = await prisma.order.create({
        data: {
            userId: userId,
            orderedBooks: orderedBooks
        }
    });

    return result;
}

const getAll = async (options: IPaginationOptions): Promise<IGenericResponse<Order[]>> => {
    const { page, size, skip } = paginationHelpers.calculatePagination(options);


    const result = await prisma.order.findMany({
        skip,
        take: size,

        orderBy: options.sortBy && options.sortOrder
            ? {
                [options.sortBy]: options.sortOrder
            }
            : {
                id: 'desc'
            }

    })

    const total = await prisma.order.count({});

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



const getSingle = async (id: string): Promise<Order | null> => {
    const result = await prisma.order.findUnique({
        where: {
            id: id
        },

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