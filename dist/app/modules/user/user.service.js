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
exports.UserService = void 0;
const prisma_1 = require("../../../shared/prisma");
const getProfile = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const profile = yield prisma_1.prisma.user.findUnique({
        where: {
            id: userId
        },
        include: {
            Booking: true,
            Cart: true,
            ServiceHistory: true,
            Content: true,
            Notification: true
        }
    });
    return profile;
});
const updateProfile = (userId, userData) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedProfile = yield prisma_1.prisma.user.update({
        where: {
            id: userId
        },
        data: userData,
        include: {
            Booking: true,
            Cart: true,
            ServiceHistory: true,
            Content: true,
            Notification: true
        }
    });
    return updatedProfile;
});
exports.UserService = {
    getProfile,
    updateProfile
};
