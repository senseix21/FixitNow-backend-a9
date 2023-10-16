import httpStatus from "http-status";
import { Secret } from "jsonwebtoken";
import config from "../../../config";
import { jwtHelpers } from "../../../helpers/jwthelpers";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { NotificationService } from "./notification.service";

const getNotifications = catchAsync(async (req, res) => {
    const accessToken: any = req.headers.authorization;
    const decodedToken = jwtHelpers.verifyToken(accessToken, config.jwt.secret as Secret);
    const userId = decodedToken.userId;
    const notifications = await NotificationService.getNotificationsByUserId(userId);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Notifications retrieved successfully!",
        data: notifications,
    });
});

const deleteNotification = catchAsync(async (req, res) => {
    const notificationId = req.params.id;
    await NotificationService.deleteNotification(notificationId);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Notification deleted successfully!",
    });
});

export const NotificationController = {
    getNotifications,
    deleteNotification,
};
