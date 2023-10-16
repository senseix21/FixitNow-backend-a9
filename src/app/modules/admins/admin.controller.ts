import httpStatus from "http-status";
import config from "../../../config";
import { ENUM_USER_ROLE } from "../../../enums/user";
import catchAsync from "../../../shared/catchAsync";
import { prisma } from "../../../shared/prisma";
import sendLoginResponse from "../../../shared/sendLoginResponse";
import sendResponse from "../../../shared/sendResponse";
import { AdminAuthService } from "./admin.service";

const signUp = catchAsync(async (req, res) => {
    const { email } = req.body;

    // Check if the email already exists in the database
    const existingUser = await prisma.user.findFirst({
        where: {
            email: email,
        },
    });

    if (existingUser) {
        // Email is already in use, return an error response
        return sendResponse(res, {
            success: false,
            statusCode: httpStatus.BAD_REQUEST,
            message: "Email is already registered.",
        });
    }

    // Email is not in use, proceed with user creation
    const result = await AdminAuthService.signUp(req.body);

    if (result.role === ENUM_USER_ROLE.ADMIN) {
        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "Admin created successfully!",
            data: result,
        });
    } else if (result.role === ENUM_USER_ROLE.SUPER_ADMIN) {
        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "SUPER_Admin created successfully!",
            data: result,
        });
    }
});


const login = catchAsync(async (req, res) => {
    const { ...loginData } = req.body;
    const result = await AdminAuthService.login(loginData);
    const { token } = result;

    //set refreshToken in cookies
    const cookieOptions = {
        secure: config.env === "production",
        httpOnly: true,
    }
    res.cookie("refreshToken", token, cookieOptions);

    sendLoginResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Admin logged in successfully",
        token: token
    },
    );
})

export const AdminAuthController = {
    signUp,
    login
}