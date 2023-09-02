import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AuthController } from './auth.controller';
import { AuthValidataion } from './auth.validation';

const router = express.Router();

router.post('/signup',
    validateRequest(AuthValidataion.signUpValidationZodSchema),
    AuthController.signUp);

export const AuthRoutes = router; //