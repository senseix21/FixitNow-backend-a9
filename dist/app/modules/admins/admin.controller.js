"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminAuthController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const config_1 = __importDefault(require("../../../config"));
const user_1 = require("../../../enums/user");
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const prisma_1 = require("../../../shared/prisma");
const sendLoginResponse_1 = __importDefault(require("../../../shared/sendLoginResponse"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const admin_service_1 = require("./admin.service");
const signUp = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    // Check if the email already exists in the database
    const existingUser = yield prisma_1.prisma.user.findFirst({
        where: {
            email: email,
        },
    });
    if (existingUser) {
        // Email is already in use, return an error response
        return (0, sendResponse_1.default)(res, {
            success: false,
            statusCode: http_status_1.default.BAD_REQUEST,
            message: "Email is already registered.",
        });
    }
    // Email is not in use, proceed with user creation
    const result = yield admin_service_1.AdminAuthService.signUp(req.body);
    if (result.role === user_1.ENUM_USER_ROLE.ADMIN) {
        (0, sendResponse_1.default)(res, {
            success: true,
            statusCode: http_status_1.default.OK,
            message: "Admin created successfully!",
            data: result,
        });
    }
    else if (result.role === user_1.ENUM_USER_ROLE.SUPER_ADMIN) {
        (0, sendResponse_1.default)(res, {
            success: true,
            statusCode: http_status_1.default.OK,
            message: "SUPER_Admin created successfully!",
            data: result,
        });
    }
}));
const login = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const loginData = __rest(req.body, []);
    const result = yield admin_service_1.AdminAuthService.login(loginData);
    const { token } = result;
    //set refreshToken in cookies
    const cookieOptions = {
        secure: config_1.default.env === "production",
        httpOnly: true,
    };
    res.cookie("refreshToken", token, cookieOptions);
    (0, sendLoginResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Admin logged in successfully",
        token: token
    });
}));
exports.AdminAuthController = {
    signUp,
    login
};
