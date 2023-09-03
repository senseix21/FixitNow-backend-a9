import express from 'express';
import authenticate from '../../middlewares/authenticate';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { OrderController } from './order.controller';


const router = express.Router();

router.post('/',
    authenticate(ENUM_USER_ROLE.CUSTOMER),
    OrderController.create
);

router.get('/',
    OrderController.getAll);

router.get('/:id',
    OrderController.getSingle);

router.delete('/:id',
    authenticate(ENUM_USER_ROLE.ADMIN),
    OrderController.deleteOne);

export const OrderRoutes = router;