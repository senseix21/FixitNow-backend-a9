import { Content, Prisma } from "@prisma/client";
import { prisma } from "../../../shared/prisma";

const createContent = async (data: Prisma.ContentCreateInput): Promise<Content> => {
    const content = await prisma.content.create({
        data,
    });
    return content;
};

const getAllContent = async (): Promise<Content[]> => {
    const content = await prisma.content.findMany();
    return content;
};

const getContentById = async (contentId: string): Promise<Content | null> => {
    const content = await prisma.content.findUnique({
        where: {
            id: contentId,
        },
    });
    return content;
};

const updateContent = async (contentId: string, data: Prisma.ContentUpdateInput): Promise<Content | null> => {
    const content = await prisma.content.update({
        where: {
            id: contentId,
        },
        data,
    });
    return content;
};

const deleteContent = async (contentId: string): Promise<void> => {
    await prisma.content.delete({
        where: {
            id: contentId,
        },
    });
};

export const ContentService = {
    createContent,
    getAllContent,
    getContentById,
    updateContent,
    deleteContent,
};
