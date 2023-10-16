import { Router } from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import authenticate from '../../middlewares/authenticate';
import validateRequest from '../../middlewares/validateRequest';
import { FeedbackController } from './feedback.controller';
import { FeedbackValidation } from './feedback.validation';

const router = Router();

// Route for creating user feedback
router.post('/',
    authenticate(ENUM_USER_ROLE.USER),
    validateRequest(FeedbackValidation.createFeedbackZodSchema),
    FeedbackController.createFeedback
);

// Route for getting a single user feedback
router.get('/:id', FeedbackController.getFeedbackById);

// Route for updating user feedback
router.put('/:id',
    authenticate(ENUM_USER_ROLE.USER),
    validateRequest(FeedbackValidation.createFeedbackZodSchema),
    (FeedbackController.updateFeedback)
);

// Route for deleting user feedback
router.delete('/:id',
    authenticate(ENUM_USER_ROLE.USER),
    (FeedbackController.deleteFeedback));

// Route for listing all user feedbacks
router.get('/', (FeedbackController.getAllFeedback));

export const FeedbackRoutes = router;
