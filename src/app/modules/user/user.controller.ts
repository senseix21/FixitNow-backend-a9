import httpStatus from "http-status";
import { Secret } from "jsonwebtoken";
import config from "../../../config";
import { jwtHelpers } from "../../../helpers/jwthelpers";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { UserService } from "./user.service";


const getProfile = catchAsync(async (req, res) => {
    const accessToken: any = req.headers.authorization;
    const decodedToken = jwtHelpers.verifyToken(accessToken, config.jwt.secret as Secret);
    const userId = decodedToken.userId;

    const profile = await UserService.getProfile(userId)

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Profile retrieved successfully!",
        data: profile,
    })
});

export const UserController = {
    getProfile,
}