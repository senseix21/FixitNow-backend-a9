import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import authenticate from '../../middlewares/authenticate';
import validateRequest from '../../middlewares/validateRequest';
import { ReviewController } from './review.controller';
import { ReviewValidation } from './review.validation';

const router = express.Router();

// Create a new review
router.post('/',
    authenticate(ENUM_USER_ROLE.USER),
    validateRequest(ReviewValidation.reviewCreateSchema),
    ReviewController.createReview);

// Get reviews for a specific service
router.get('/service/:serviceId', ReviewController.getReviewsByService);

// Update a review by reviewId
router.put('/:reviewId',
    validateRequest(ReviewValidation.reviewUpdateSchema),
    ReviewController.updateReview);

// Delete a review by reviewId
router.delete('/:reviewId', ReviewController.deleteReview);

export const ReviewRoutes = router;
