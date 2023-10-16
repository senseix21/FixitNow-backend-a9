import { Prisma, UserFeedback } from "@prisma/client";
import { prisma } from "../../../shared/prisma";

const createFeedback = async (data: Prisma.UserFeedbackCreateInput): Promise<UserFeedback> => {
    const feedback = await prisma.userFeedback.create({
        data,
        include: {
            user: true
        }
    });

    return feedback;
};

const getAllFeedback = async (): Promise<UserFeedback[]> => {
    const feedback = await prisma.userFeedback.findMany({
        include: {
            user: true
        }
    });

    return feedback;
};

const getFeedbackById = async (feedbackId: string): Promise<UserFeedback | null> => {
    const feedback = await prisma.userFeedback.findUnique({
        where: {
            id: feedbackId,
        },
        include: {
            user: true
        }
    });

    return feedback;
};

const updateFeedback = async (feedbackId: string, data: Prisma.UserFeedbackUpdateInput): Promise<UserFeedback | null> => {
    const feedback = await prisma.userFeedback.update({
        where: {
            id: feedbackId,
        },
        data,
        include: {
            user: true
        }
    });

    return feedback;
};

const deleteFeedback = async (feedbackId: string): Promise<UserFeedback | null> => {
    const feedback = await prisma.userFeedback.delete({
        where: {
            id: feedbackId,
        },
    });

    return feedback;
};

export const FeedbackService = {
    createFeedback,
    getAllFeedback,
    getFeedbackById,
    updateFeedback,
    deleteFeedback,
};
