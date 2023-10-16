import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import authenticate from '../../middlewares/authenticate';
import validateRequest from '../../middlewares/validateRequest';
import { ContentController } from './content.controller';
import { ContentValidation } from './content.validation';

const router = express.Router();

// Route to create a new content
router.post('/',
    authenticate(ENUM_USER_ROLE.ADMIN),
    validateRequest(ContentValidation.createContentZodSchema),
    ContentController.createContent);

// Route to get a specific content by ID
router.get('/:contentId', ContentController.getContentById);

// Route to update an existing content by ID
router.put('/:contentId',
    authenticate(ENUM_USER_ROLE.ADMIN),
    validateRequest(ContentValidation.updateContentZodSchema),
    ContentController.updateContent);

// Route to delete a specific content by ID
router.delete('/:contentId',
    authenticate(ENUM_USER_ROLE.ADMIN),
    ContentController.deleteContent);

// Route to get all contents
router.get('/', ContentController.getAllContent);

export const ContentRoutes = router;
