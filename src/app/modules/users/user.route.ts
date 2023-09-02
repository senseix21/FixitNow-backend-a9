import express from 'express';
import { UserController } from './user.controller';
import authenticate from '../../middlewares/authenticate';
import { ENUM_USER_ROLE } from '../../../enums/user';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from './user.validation';
import { hashPassword } from '../../middlewares/passwordHash';

const router = express.Router();

router.get('/',
    authenticate(ENUM_USER_ROLE.ADMIN),
    UserController.getAll);

router.get('/:id',
    authenticate(ENUM_USER_ROLE.ADMIN),
    UserController.getSingle);

router.patch('/:id',
    authenticate(ENUM_USER_ROLE.ADMIN),
    hashPassword,
    validateRequest(UserValidation.updateUserZodSchema),
    UserController.update);

router.delete('/:id',
    authenticate(ENUM_USER_ROLE.ADMIN),
    UserController.deleteOne);

export const UserRoutes = router;