import { User } from "@prisma/client";
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

export const UserService = {
    getProfile
}

