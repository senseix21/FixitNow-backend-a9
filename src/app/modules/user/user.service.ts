import { Prisma, User } from "@prisma/client";
import { prisma } from "../../../shared/prisma";

const getProfile = async (userId: string): Promise<User | null> => {
    const profile = await prisma.user.findUnique({
        where: {
            id: userId
        },
        include: {
            Booking: true,
            Cart: true,
            ServiceHistory: true,
            Content: true,
            Notification: true
        }
    })

    return profile;
}

const updateProfile = async (userId: string, userData: Prisma.UserUpdateInput): Promise<User | null> => {
    const updatedProfile = await prisma.user.update({
        where: {
            id: userId
        },
        data: userData,

    });

    return updatedProfile;
}

export const UserService = {
    getProfile,
    updateProfile
}

