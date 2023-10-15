import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import authenticate from '../../middlewares/authenticate';
import validateRequest from '../../middlewares/validateRequest';
import { BookingController } from './booking.controller';
import { BookingValidation } from './booking.validation';

const router = express.Router();

router.post('/',
    authenticate(ENUM_USER_ROLE.USER),
    validateRequest(BookingValidation.createBookingSchema),
    BookingController.createBooking);

router.get('/',
    authenticate(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.ADMIN),
    BookingController.getBookingsByUser);

router.get('/all',
    authenticate(ENUM_USER_ROLE.ADMIN),
    BookingController.getAllBookings);

router.patch('/',
    authenticate(ENUM_USER_ROLE.ADMIN),
    validateRequest(BookingValidation.updateBookingSchema),
    BookingController.updateBookingStatus);

export const BookingRoutes = router;