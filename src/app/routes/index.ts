import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';
import { UserRoutes } from '../modules/users/user.route';
import { CategoryRoutes } from '../modules/categories/categories.route';
import { BookRoutes } from '../modules/books/book.route';

const router = express.Router();

const moduleRoutes = [
    { path: '/auth', route: AuthRoutes },
    { path: '/users', route: UserRoutes },
    { path: '/categories', route: CategoryRoutes },
    { path: '/books', route: BookRoutes },

];

//configure the routes
moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;