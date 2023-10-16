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
exports.NotificationService = void 0;
const prisma_1 = require("../../../shared/prisma");
const createNotification = (userId, content) => __awaiter(void 0, void 0, void 0, function* () {
    const notification = yield prisma_1.prisma.notification.create({
        data: {
            userId,
            content,
        },
    });
    return notification;
});
const getNotificationsByUserId = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma_1.prisma.notification.findMany({
        where: {
            userId: userId,
        },
    });
});
const deleteNotification = (notificationId) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.prisma.notification.delete({
        where: {
            id: notificationId,
        },
    });
});
exports.NotificationService = {
    createNotification,
    getNotificationsByUserId,
    deleteNotification,
};
