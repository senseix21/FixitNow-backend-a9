import express from 'express';
import authenticate from '../../middlewares/authenticate';
import { ENUM_USER_ROLE } from '../../../enums/user';
import validateRequest from '../../middlewares/validateRequest';
import { BookController } from './book.controller';
import { BookValidation } from './book.validation';

const router = express.Router();

router.post('/',
    authenticate(ENUM_USER_ROLE.ADMIN),
    validateRequest(BookValidation.createBookZodSchema),
    BookController.create
);

router.get('/',
    BookController.getAll);

router.get('/:id',
    BookController.getSingle);

router.patch('/:id',
    authenticate(ENUM_USER_ROLE.ADMIN),
    validateRequest(BookValidation.UpdateBookZodSchema),
    BookController.update);

router.delete('/:id',
    authenticate(ENUM_USER_ROLE.ADMIN),
    BookController.deleteOne);

export const BookRoutes = router;