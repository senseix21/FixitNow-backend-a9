import { ServiceHistory } from "@prisma/client";
import { prisma } from "../../../shared/prisma";


async function createServiceHistory(userId: string, serviceId: string): Promise<ServiceHistory> {
    const serviceHistory = await prisma.serviceHistory.create({
        data: {
            userId,
            serviceId,
        },
    });
    return serviceHistory;
}

async function getServiceHistoryByUser(userId: string): Promise<ServiceHistory[]> {
    const serviceHistory = await prisma.serviceHistory.findMany({
        where: {
            userId,
        },
        include: {
            service: true,
        }
    });
    return serviceHistory;
}

export const ServiceHistoryService = { getServiceHistoryByUser, createServiceHistory };

