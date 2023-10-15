import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import authenticate from '../../middlewares/authenticate';
import validateRequest from '../../middlewares/validateRequest';
import { ServicesController } from './service.controller';
import { ServicesValidation } from './service.validation';

const router = express.Router();

router.post('/create-Service',
    authenticate(ENUM_USER_ROLE.ADMIN),
    validateRequest(ServicesValidation.createServiceZodSchema),
    ServicesController.create
);

router.get('/',
    ServicesController.getAll);

router.get('/:categoryId',
    ServicesController.getByCategory);

router.get('/',
    ServicesController.getAll);

router.get('/:id',
    ServicesController.getSingle);

router.patch('/:id',
    authenticate(ENUM_USER_ROLE.ADMIN),
    validateRequest(ServicesValidation.UpdateServiceZodSchema),
    ServicesController.update);

router.delete('/:id',
    authenticate(ENUM_USER_ROLE.ADMIN),
    ServicesController.deleteOne);

export const ServicesRoutes = router;