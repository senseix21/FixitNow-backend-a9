import { Secret } from "jsonwebtoken";
import config from "../../../config";
import { jwtHelpers } from "../../../helpers/jwthelpers";
import catchAsync from "../../../shared/catchAsync";
import { ProfileService } from "./profile.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

const getProfile = catchAsync(async (req, res) => {
    const token: any = req.headers.authorization;
    const decodedToken = jwtHelpers.verifyToken(token, config.jwt.secret as Secret);
    const id = decodedToken.userId;
    const result = await ProfileService.getProfile(id)

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "User profile was successfully retrieved",
        data: result
    })
});

export const ProfileController = {
    getProfile
}