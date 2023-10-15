import httpStatus from "http-status";
import { Secret } from "jsonwebtoken";
import config from "../../../config";
import { jwtHelpers } from "../../../helpers/jwthelpers";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { CartService } from "./cart.service";

const addToCart = catchAsync(async (req, res) => {
    const accessToken: any = req.headers.authorization;
    const decodedToken = jwtHelpers.verifyToken(accessToken, config.jwt.secret as Secret);
    const userId = decodedToken.userId;
    const { serviceId } = req.body;
    const result = await CartService.addToCart(userId, serviceId);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Service added to the cart successfully!",
        data: result,
    });
});

const removeFromCart = catchAsync(async (req, res) => {
    const cartItemId = req.params.id;
    await CartService.removeFromCart(cartItemId);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Service removed from the cart successfully!",
    });
});

const getCartItems = catchAsync(async (req, res) => {
    const accessToken: any = req.headers.authorization;
    const decodedToken = jwtHelpers.verifyToken(accessToken, config.jwt.secret as Secret);
    const userId = decodedToken.userId; const cartItems = await CartService.getCartItems(userId);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Cart items retrieved successfully!",
        data: cartItems,
    });
});

export const CartController = {
    addToCart,
    removeFromCart,
    getCartItems,
};
