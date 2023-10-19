import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendLoginResponse from "../../../shared/sendLoginResponse";
import sendResponse from "../../../shared/sendResponse";
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
    const { token } = result;

    //set refreshToken in cookies
    // const cookieOptions = {
    //     secure: config.env === "production",
    //     httpOnly: true,
    // }
    res.cookie("refreshToken", token);

    sendLoginResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "User logged in successfully",
        token: token
    },
    );
})

export const AuthController = {
    signUp,
    login
}