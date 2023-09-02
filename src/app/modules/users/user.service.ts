import { User } from "@prisma/client";
import { prisma } from "../../../shared/prisma"

const getAll = async () => {
    const result = await prisma.user.findMany({
        orderBy: {
            name: "asc"
        }
    })

    return result;
}

const getSingle = async (id: string): Promise<User | null> => {
    const result = await prisma.user.findUnique({
        where: {
            id: id
        }
    });

    return result;
}

export const UserService = {
    getAll,
    getSingle
}