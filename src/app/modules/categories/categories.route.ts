import express from 'express';
import authenticate from '../../middlewares/authenticate';
import { ENUM_USER_ROLE } from '../../../enums/user';
import validateRequest from '../../middlewares/validateRequest';
import { CategoryController } from './categories.controller';
import { CategoryValidation } from './categories.validation';

const router = express.Router();

router.post('/create-category',
    authenticate(ENUM_USER_ROLE.ADMIN),
    validateRequest(CategoryValidation.createCategoryZodSchema),
    CategoryController.create
);

router.get('/',
    CategoryController.getAll);

router.get('/:id',
    CategoryController.getSingle);

router.patch('/:id',
    authenticate(ENUM_USER_ROLE.ADMIN),
    validateRequest(CategoryValidation.UpdateCategoryZodSchema),
    CategoryController.update);

router.delete('/:id',
    authenticate(ENUM_USER_ROLE.ADMIN),
    CategoryController.deleteOne);

export const CategoryRoutes = router;