import { Notification } from "@prisma/client";
import { prisma } from "../../../shared/prisma";

const createNotification = async (userId: string, content: string): Promise<Notification> => {
    const notification = await prisma.notification.create({
        data: {
            userId,
            content,
        },
    });
    return notification;
};

const getNotificationsByUserId = async (userId: string): Promise<Notification[]> => {
    return prisma.notification.findMany({
        where: {
            userId: userId,
        },
    });
};

const deleteNotification = async (notificationId: string): Promise<void> => {
    await prisma.notification.delete({
        where: {
            id: notificationId,
        },
    });
};

export const NotificationService = {
    createNotification,
    getNotificationsByUserId,
    deleteNotification,
};
