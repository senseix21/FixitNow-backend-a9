import httpStatus from "http-status";
import config from "../../../config";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { ILoginResponse } from "./auth.interface";
import { AuthService } from "./auth.service";

const signUp = catchAsync(async (req, res) => {
    const result = await AuthService.signUp(req.body)

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "User created successfully!",
        data: result
    })
});

const login = catchAsync(async (req, res) => {
    const { ...loginData } = req.body;
    const result = await AuthService.login(loginData);
    const { refreshToken, ...others } = result;

    //set refreshToken in cookies
    const cookieOptions = {
        secure: config.env === "production",
        httpOnly: true,
    }
    res.cookie("refreshToken", refreshToken, cookieOptions);

    sendResponse<ILoginResponse>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "User logged in successfully",
        data: others
    },
    );
})

export const AuthController = {
    signUp,
    login
}