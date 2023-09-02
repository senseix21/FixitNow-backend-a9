import { User } from "@prisma/client";
import { prisma } from "../../../shared/prisma"
import { IUser } from "./user.interface";

const getAll = async (): Promise<IUser[]> => {
    const result = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            contactNo: true,
            address: true,
            profileImg: true,
        },
        orderBy: {
            name: "asc"
        },

    })

    return result;
}

const getSingle = async (id: string): Promise<IUser | null> => {
    const result = await prisma.user.findUnique({
        where: {
            id: id
        },
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            contactNo: true,
            address: true,
            profileImg: true,
        },
    });

    return result;
}

const update = async (id: string, payload: Partial<User>): Promise<IUser> => {
    const result = await prisma.user.update({
        where: { id: id },
        data: payload,
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            contactNo: true,
            address: true,
            profileImg: true,
        },
    });

    return result;
}

const deleteOne = async (id: string) => {
    const result = await prisma.user.delete({
        where: { id: id },
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            contactNo: true,
            address: true,
            profileImg: true,
        },
    })

    return result;
}


export const UserService = {
    getAll,
    getSingle,
    update,
    deleteOne
}