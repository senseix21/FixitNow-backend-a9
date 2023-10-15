import httpStatus from "http-status";
import { Secret } from "jsonwebtoken";
import config from "../../../config";
import { jwtHelpers } from "../../../helpers/jwthelpers";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { ServiceHistoryService } from "./serviceHistory.service";

const getServiceHistoryByUser = catchAsync(async (req, res) => {
    const accessToken: any = req.headers.authorization;
    const decodedToken = jwtHelpers.verifyToken(accessToken, config.jwt.secret as Secret);
    const userId = decodedToken.userId;
    const serviceHistory = await ServiceHistoryService.getServiceHistoryByUser(userId);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Service history retrieved successfully!",
        data: serviceHistory,
    });
});

export const ServiceHistoryController = {
    getServiceHistoryByUser,
};
