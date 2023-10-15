import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import authenticate from '../../middlewares/authenticate';
import { CartController } from './cart.controller';

const router = express.Router();

router.post('/',
    authenticate(ENUM_USER_ROLE.USER),
    CartController.addToCart)

router.get('/', authenticate(ENUM_USER_ROLE.USER),
    CartController.getCartItems);

router.delete('/:id', authenticate(ENUM_USER_ROLE.USER),
    CartController.removeFromCart)

export const CartRoutes = router;