import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import httpStatus from "http-status";
import { Secret } from "jsonwebtoken";
import config from "../../../config";
import { jwtHelpers } from "../../../helpers/jwthelpers";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { ContentService } from "./content.service";

const createContent = catchAsync(async (req: Request, res: Response) => {
    const contentData: Prisma.ContentCreateInput = req.body;
    const accessToken: any = req.headers.authorization;
    const decodedToken = jwtHelpers.verifyToken(accessToken, config.jwt.secret as Secret);
    const authorId = decodedToken.userId;
    const data = { authorId, ...contentData }
    const content = await ContentService.createContent(data);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "Content created successfully",
        data: content,
    });
});

const getAllContent = catchAsync(async (req: Request, res: Response) => {
    const content = await ContentService.getAllContent();
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Content retrieved successfully",
        data: content,
    });
});

const getContentById = catchAsync(async (req: Request, res: Response) => {
    const contentId = req.params.id;
    const content = await ContentService.getContentById(contentId);

    if (content) {
        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "Content retrieved successfully",
            data: content,
        });
    } else {
        sendResponse(res, {
            success: false,
            statusCode: httpStatus.NOT_FOUND,
            message: "Content not found",
        });
    }
});

const updateContent = catchAsync(async (req: Request, res: Response) => {
    const contentId = req.params.id;
    const contentData: Prisma.ContentUpdateInput = req.body;
    const content = await ContentService.updateContent(contentId, contentData);

    if (content) {
        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "Content updated successfully",
            data: content,
        });
    } else {
        sendResponse(res, {
            success: false,
            statusCode: httpStatus.NOT_FOUND,
            message: "Content not found",
        });
    }
});

const deleteContent = catchAsync(async (req: Request, res: Response) => {
    const contentId = req.params.id;
    await ContentService.deleteContent(contentId);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Content deleted successfully",
    });
});

export const ContentController = {
    createContent,
    getAllContent,
    getContentById,
    updateContent,
    deleteContent,
};
