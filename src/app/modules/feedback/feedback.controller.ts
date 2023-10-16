import { Request, Response } from "express";
import httpStatus from "http-status";
import { Secret } from "jsonwebtoken";
import config from "../../../config";
import { jwtHelpers } from "../../../helpers/jwthelpers";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { FeedbackService } from "./feedback.service";

const createFeedback = catchAsync(async (req: Request, res: Response) => {
    const data = req.body;
    const accessToken: any = req.headers.authorization;
    const decodedToken = jwtHelpers.verifyToken(accessToken, config.jwt.secret as Secret);
    const userId = decodedToken.userId;
    const feedbackData = { userId, ...data }
    const feedback = await FeedbackService.createFeedback(feedbackData);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Feedback created successfully",
        data: feedback,
    });
});

const getAllFeedback = catchAsync(async (req: Request, res: Response) => {
    const feedback = await FeedbackService.getAllFeedback();

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Feedback retrieved successfully",
        data: feedback,
    });
});

const getFeedbackById = catchAsync(async (req: Request, res: Response) => {
    const feedbackId = req.params.id;
    const feedback = await FeedbackService.getFeedbackById(feedbackId);

    if (!feedback) {
        sendResponse(res, {
            success: false,
            statusCode: httpStatus.NOT_FOUND,
            message: "Feedback not found",
        });
    } else {
        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "Feedback retrieved successfully",
            data: feedback,
        });
    }
});

const updateFeedback = catchAsync(async (req: Request, res: Response) => {
    const feedbackId = req.params.id;
    const feedbackData = req.body;
    const feedback = await FeedbackService.updateFeedback(feedbackId, feedbackData);

    if (!feedback) {
        sendResponse(res, {
            success: false,
            statusCode: httpStatus.NOT_FOUND,
            message: "Feedback not found",
        });
    } else {
        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "Feedback updated successfully",
            data: feedback,
        });
    }
});

const deleteFeedback = catchAsync(async (req: Request, res: Response) => {
    const feedbackId = req.params.id;
    const feedback = await FeedbackService.deleteFeedback(feedbackId);

    if (!feedback) {
        sendResponse(res, {
            success: false,
            statusCode: httpStatus.NOT_FOUND,
            message: "Feedback not found",
        });
    } else {
        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "Feedback deleted successfully",
            data: feedback,
        });
    }
});

export const FeedbackController = {
    createFeedback,
    getAllFeedback,
    getFeedbackById,
    updateFeedback,
    deleteFeedback,
};
