import { Book } from "@prisma/client";
import { prisma } from "../../../shared/prisma"
import { IPaginationOptions } from "../../../interfaces/pagination";
import { IGenericResponse } from "../../../interfaces/common";
import { paginationHelpers } from "../../../helpers/paginationHelpers";
import { bookSearchableFields } from "./book.constants";


const create = async (payload: Book): Promise<Book> => {
    const result = await prisma.book.create({
        data: payload
    });

    return result;
}

const getAll = async (filters: any, options: IPaginationOptions): Promise<IGenericResponse<Book[]>> => {
    const { page, size, skip } = paginationHelpers.calculatePagination(options);
    const { searchTerm, maxPrice, minPrice, ...filtersData } = filters;
    const andConditions = [];


    if (searchTerm) {
        andConditions.push({
            OR: bookSearchableFields.map((field) => ({
                [field]: {
                    contains: searchTerm,
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

    const result = await prisma.book.findMany({
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

    })

    const total = await prisma.book.count({ where: whereConditions });

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

const getByCategory = async (id: string, options: IPaginationOptions): Promise<IGenericResponse<Book[]>> => {
    const { page, size, skip } = paginationHelpers.calculatePagination(options);

    const result = await prisma.book.findMany({
        skip,
        take: size,
        where: ({
            categoryId: {
                equals: id
            },

        })
    });

    const total = await prisma.book.count({
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

const getSingle = async (id: string): Promise<Book | null> => {
    const result = await prisma.book.findUnique({
        where: {
            id: id
        },

    });

    return result;
}

const update = async (id: string, payload: Partial<Book>): Promise<Book> => {
    const result = await prisma.book.update({
        where: { id: id },
        data: payload,

    });

    return result;
}

const deleteOne = async (id: string) => {
    const result = await prisma.book.delete({
        where: { id: id },

    })

    return result;
}


export const BookService = {
    create,
    getAll,
    getSingle,
    getByCategory,
    update,
    deleteOne
}