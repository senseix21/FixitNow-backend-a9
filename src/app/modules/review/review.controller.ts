import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ReviewService } from './review.service';

const createReview = catchAsync(async (req, res) => {
    const { serviceId, userId, rating, comment } = req.body;
    const review = await ReviewService.createReview(serviceId, userId, rating, comment);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Review created successfully!',
        data: review,
    });
});

const getReviewsByService = catchAsync(async (req, res) => {
    const { serviceId } = req.params;
    const reviews = await ReviewService.getReviewsByService(serviceId);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Reviews retrieved successfully!',
        data: reviews,
    });
});

const updateReview = catchAsync(async (req, res) => {
    const { reviewId } = req.params;
    const { rating, comment } = req.body;
    const updatedReview = await ReviewService.updateReview(reviewId, rating, comment);

    if (!updatedReview) {
        sendResponse(res, {
            success: false,
            statusCode: httpStatus.NOT_FOUND,
            message: 'Review not found.',
        });
    } else {
        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: 'Review updated successfully!',
            data: updatedReview,
        });
    }
});

const deleteReview = catchAsync(async (req, res) => {
    const { reviewId } = req.params;
    const deletedReview = await ReviewService.deleteReview(reviewId);

    if (!deletedReview) {
        sendResponse(res, {
            success: false,
            statusCode: httpStatus.NOT_FOUND,
            message: 'Review not found.',
        });
    } else {
        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: 'Review deleted successfully!',
            data: deletedReview,
        });
    }
});

export const ReviewController = {
    createReview,
    getReviewsByService,
    updateReview,
    deleteReview,
};
