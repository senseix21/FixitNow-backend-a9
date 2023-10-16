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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartService = void 0;
const prisma_1 = require("../../../shared/prisma");
const addToCart = (userId, serviceId) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if the user has already added this service to the cart
    const existingCartItem = yield prisma_1.prisma.cart.findFirst({
        where: {
            userId,
            serviceId,
        },
    });
    if (existingCartItem) {
        throw new Error("Service is already in the cart");
    }
    // If the service is not already in the cart, add it
    const result = yield prisma_1.prisma.cart.create({
        data: {
            userId,
            serviceId,
        },
    });
    return result;
});
const removeFromCart = (cartItemId) => __awaiter(void 0, void 0, void 0, function* () {
    // Delete the cart item
    yield prisma_1.prisma.cart.delete({
        where: {
            id: cartItemId,
        },
    });
});
const getCartItems = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const cartItems = yield prisma_1.prisma.cart.findMany({
        where: {
            userId,
        },
        include: {
            service: true,
        },
    });
    return cartItems;
});
exports.CartService = {
    addToCart,
    removeFromCart,
    getCartItems,
};
