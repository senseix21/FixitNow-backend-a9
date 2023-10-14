import express from 'express';
import { hashPassword } from '../../middlewares/passwordHash';
import validateRequest from '../../middlewares/validateRequest';
import { AuthController } from './auth.controller';
import { AuthValidataion } from './auth.validation';

const router = express.Router();

router.post('/signup',
    hashPassword,
    validateRequest(AuthValidataion.signUpValidationZodSchema),
    AuthController.signUp);

router.post('/signin', AuthController.login);

export const AuthRoutes = router; // 