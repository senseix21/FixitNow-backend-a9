import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';
import { BookingRoutes } from '../modules/booking/booking.route';
import { CartRoutes } from '../modules/carts/cart.route';
import { CategoryRoutes } from '../modules/category/category.route';
import { ReviewRoutes } from '../modules/review/review.route';
import { ServiceHistoryRoutes } from '../modules/serviceHistory/serviceHistory.route';
import { ServicesRoutes } from '../modules/services/service.route';
import { ProfileRoutes } from '../modules/user/user.route';


const router = express.Router();

const moduleRoutes = [
    { path: '/auth', route: AuthRoutes },
    { path: '/category', route: CategoryRoutes },
    { path: '/services', route: ServicesRoutes },
    { path: '/cart', route: CartRoutes },
    { path: '/booking', route: BookingRoutes },
    { path: '/profile', route: ProfileRoutes },
    { path: '/review', route: ReviewRoutes },
    { path: '/serviceHistory', route: ServiceHistoryRoutes }



];

//configure the routes
moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;