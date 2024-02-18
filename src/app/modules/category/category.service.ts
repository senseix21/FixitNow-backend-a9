import { Category } from "@prisma/client";
import { prisma } from "../../../shared/prisma";

const create = async (payload: Category): Promise<Category> => {
    const result = await prisma.category.create({
        data: payload
    });

    return result;
}

const getAll = async (): Promise<Category[]> => {
    const result = await prisma.category.findMany({
        orderBy: {
            name: "asc"
        },
        include: {
            service: true,
        }

    })

    return result;
}

const getSingle = async (id: string): Promise<Category | null> => {
    const result = await prisma.category.findUnique({
        where: {
            id: id
        },
        include: {
            service: true
        }

    });

    return result;
}

const update = async (id: string, payload: Partial<Category>): Promise<Category> => {
    const result = await prisma.category.update({
        where: { id: id },
        data: payload,

    });

    return result;
}

const deleteOne = async (id: string) => {
    const result = await prisma.category.delete({
        where: { id: id },

    })

    return result;
}



export const CategoryService = {
    create,
    getAll,
    getSingle,
    update,
    deleteOne,
};