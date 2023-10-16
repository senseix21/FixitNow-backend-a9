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
exports.FeedbackService = void 0;
const prisma_1 = require("../../../shared/prisma");
const createFeedback = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const feedback = yield prisma_1.prisma.userFeedback.create({
        data,
        include: {
            user: true
        }
    });
    return feedback;
});
const getAllFeedback = () => __awaiter(void 0, void 0, void 0, function* () {
    const feedback = yield prisma_1.prisma.userFeedback.findMany({
        include: {
            user: true
        }
    });
    return feedback;
});
const getFeedbackById = (feedbackId) => __awaiter(void 0, void 0, void 0, function* () {
    const feedback = yield prisma_1.prisma.userFeedback.findUnique({
        where: {
            id: feedbackId,
        },
        include: {
            user: true
        }
    });
    return feedback;
});
const updateFeedback = (feedbackId, data) => __awaiter(void 0, void 0, void 0, function* () {
    const feedback = yield prisma_1.prisma.userFeedback.update({
        where: {
            id: feedbackId,
        },
        data,
        include: {
            user: true
        }
    });
    return feedback;
});
const deleteFeedback = (feedbackId) => __awaiter(void 0, void 0, void 0, function* () {
    const feedback = yield prisma_1.prisma.userFeedback.delete({
        where: {
            id: feedbackId,
        },
    });
    return feedback;
});
exports.FeedbackService = {
    createFeedback,
    getAllFeedback,
    getFeedbackById,
    updateFeedback,
    deleteFeedback,
};
