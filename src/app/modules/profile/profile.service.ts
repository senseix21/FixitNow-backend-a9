import { prisma } from "../../../shared/prisma";
import { IUser } from "../users/user.interface";

const getProfile = async (id: string): Promise<IUser | null> => {
    const result = await prisma.user.findUnique({
        where: {
            id: id,
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

export const ProfileService = {
    getProfile
}