import { Cart } from "@prisma/client";
import { prisma } from "../../../shared/prisma";

const addToCart = async (userId: string, serviceId: string): Promise<Cart> => {
    // Check if the user has already added this service to the cart
    const existingCartItem = await prisma.cart.findFirst({
        where: {
            userId,
            serviceId,
        },
    });

    if (existingCartItem) {
        throw new Error("Service is already in the cart");
    }

    // If the service is not already in the cart, add it
    const result = await prisma.cart.create({
        data: {
            userId,
            serviceId,
        },
    });

    return result;
};

const removeFromCart = async (cartItemId: string): Promise<void> => {
    // Delete the cart item
    await prisma.cart.delete({
        where: {
            id: cartItemId,
        },
    });
};

const getCartItems = async (userId: string): Promise<Cart[]> => {
    const cartItems = await prisma.cart.findMany({
        where: {
            userId,
        },
        include: {
            service: true,
        },
    });

    return cartItems;
};

export const CartService = {
    addToCart,
    removeFromCart,
    getCartItems,
};
