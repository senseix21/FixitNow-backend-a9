import express from 'express';
import authenticate from '../../middlewares/authenticate';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { OrderController } from './order.controller';


const router = express.Router();

router.post('/create-order',
    authenticate(ENUM_USER_ROLE.CUSTOMER),
    OrderController.create
);

router.get('/',
    authenticate(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
    OrderController.getAll);

router.get('/:id',
    authenticate(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
    OrderController.getSingle);


export const OrderRoutes = router;