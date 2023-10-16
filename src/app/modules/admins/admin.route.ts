import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import authenticate from '../../middlewares/authenticate';
import { hashPassword } from '../../middlewares/passwordHash';
import validateRequest from '../../middlewares/validateRequest';
import { AuthValidataion } from '../auth/auth.validation';
import { AdminAuthController } from './admin.controller';


const router = express.Router();

router.post('/',
    authenticate(ENUM_USER_ROLE.SUPER_ADMIN),
    hashPassword,
    validateRequest(AuthValidataion.signUpValidationZodSchema),
    AdminAuthController.signUp);

router.post('/super-admin-signup',
    hashPassword,
    validateRequest(AuthValidataion.signUpValidationZodSchema),
    AdminAuthController.signUp);

router.post('/admin-signin', AdminAuthController.login);

export const AdminAuthRoutes = router; // 