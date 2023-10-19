import { Service } from "@prisma/client";
import { paginationHelpers } from "../../../helpers/paginationHelpers";
import { IGenericResponse } from "../../../interfaces/common";
import { IPaginationOptions } from "../../../interfaces/pagination";
import { prisma } from "../../../shared/prisma";
import { serviceSearchableFields } from "./service.constants";


const create = async (payload: Service): Promise<Service> => {
    const result = await prisma.service.create({
        data: payload,
        include: {
            category: true
        }
    });

    return result;
}

const getAll = async (filters: any, options: IPaginationOptions): Promise<IGenericResponse<Service[]>> => {
    const { page, size, skip } = paginationHelpers.calculatePagination(options);
    const { search, maxPrice, minPrice, ...filtersData } = filters;
    const andConditions = [];


    if (search) {
        andConditions.push({
            OR: serviceSearchableFields.map((field) => ({
                [field]: {
                    contains: search,
                    mode: 'insensitive'
                }
            }))
        })
    }


    if (Object.keys(filtersData).length > 0) {
        andConditions.push({
            AND: Object.keys(filtersData).map(key => ({
                [key]: {
                    equals: (filtersData as any)[key]
                }
            }))
        })
    }

    if (minPrice !== undefined && maxPrice !== undefined) {
        andConditions.push({
            price: {
                gte: minPrice,
                lte: maxPrice
            }
        });
    }


    const whereConditions = andConditions.length > 0 ? { AND: andConditions } : {};

    const result = await prisma.service.findMany({
        skip,
        take: size,
        where: whereConditions,
        include: {
            category: true,
            Review: true,
        },
        orderBy: options.sortBy && options.sortOrder
            ? {
                [options.sortBy]: options.sortOrder
            }
            : {
                id: 'desc'
            }

    })

    const total = await prisma.service.count({ where: whereConditions });

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

const getByCategory = async (id: string, options: IPaginationOptions): Promise<IGenericResponse<Service[]>> => {
    const { page, size, skip } = paginationHelpers.calculatePagination(options);

    const result = await prisma.service.findMany({
        skip,
        take: size,
        where: ({
            categoryId: {
                equals: id
            }
        }),
        include: {
            category: true,
            Review: true,
        },
    });

    const total = await prisma.service.count({
        where: ({
            categoryId: {
                equals: id
            },

        })
    })

    return {
        meta: {
            page: page,
            size: size,
            total: total,
            totalPage: Math.floor(total / size + 1)
        },
        data: result
    }
}

const getSingle = async (id: string): Promise<Service | null> => {
    const result = await prisma.service.findUnique({
        where: {
            id: id
        },
        include: {
            category: true,
            Review: true,
        },

    });

    return result;
}

const update = async (id: string, payload: Partial<Service>): Promise<Service> => {
    const result = await prisma.service.update({
        where: { id: id },
        data: payload,

    });

    return result;
}

const deleteOne = async (id: string) => {
    const result = await prisma.service.delete({
        where: { id: id },

    })

    return result;
}


export const ServicesService = {
    create,
    getAll,
    getSingle,
    getByCategory,
    update,
    deleteOne
}