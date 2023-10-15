import { Review } from '@prisma/client';
import { prisma } from '../../../shared/prisma';

const createReview = async (serviceId: string, userId: string, rating: number, comment: string): Promise<Review> => {
    const review = await prisma.review.create({
        data: {
            serviceId,
            userId,
            rating,
            comment,
        },
    });

    return review;
};

const getReviewsByService = async (serviceId: string): Promise<Review[]> => {
    const reviews = await prisma.review.findMany({
        where: {
            serviceId,
        },
        include: {
            user: true, // Include user details
        },
    });

    return reviews;
};

const updateReview = async (reviewId: string, rating: number, comment: string): Promise<Review | null> => {
    const updatedReview = await prisma.review.update({
        where: {
            id: reviewId,
        },
        data: {
            rating,
            comment,
        },
    });

    return updatedReview;
};

const deleteReview = async (reviewId: string): Promise<Review | null> => {
    const deletedReview = await prisma.review.delete({
        where: {
            id: reviewId,
        },
    });

    return deletedReview;
};

export const ReviewService = {
    createReview,
    getReviewsByService,
    updateReview,
    deleteReview,
};

