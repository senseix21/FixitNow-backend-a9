import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';
import { CategoryRoutes } from '../modules/category/category.route';


const router = express.Router();

const moduleRoutes = [
    { path: '/auth', route: AuthRoutes },
    { path: '/category', route: CategoryRoutes }



];

//configure the routes
moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;