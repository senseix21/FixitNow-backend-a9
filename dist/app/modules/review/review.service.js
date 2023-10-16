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
exports.ReviewService = void 0;
const prisma_1 = require("../../../shared/prisma");
const createReview = (serviceId, userId, rating, comment) => __awaiter(void 0, void 0, void 0, function* () {
    const review = yield prisma_1.prisma.review.create({
        data: {
            serviceId,
            userId,
            rating,
            comment,
        },
    });
    return review;
});
const getReviewsByService = (serviceId) => __awaiter(void 0, void 0, void 0, function* () {
    const reviews = yield prisma_1.prisma.review.findMany({
        where: {
            serviceId,
        },
        include: {
            user: true, // Include user details
        },
    });
    return reviews;
});
const updateReview = (reviewId, rating, comment) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedReview = yield prisma_1.prisma.review.update({
        where: {
            id: reviewId,
        },
        data: {
            rating,
            comment,
        },
    });
    return updatedReview;
});
const deleteReview = (reviewId) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedReview = yield prisma_1.prisma.review.delete({
        where: {
            id: reviewId,
        },
    });
    return deletedReview;
});
exports.ReviewService = {
    createReview,
    getReviewsByService,
    updateReview,
    deleteReview,
};
