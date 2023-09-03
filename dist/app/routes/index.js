"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_1 = require("../modules/auth/auth.route");
const user_route_1 = require("../modules/users/user.route");
const categories_route_1 = require("../modules/categories/categories.route");
const book_route_1 = require("../modules/books/book.route");
const order_route_1 = require("../modules/orders/order.route");
const profile_route_1 = require("../modules/profile/profile.route");
const router = express_1.default.Router();
const moduleRoutes = [
    { path: '/auth', route: auth_route_1.AuthRoutes },
    { path: '/users', route: user_route_1.UserRoutes },
    { path: '/categories', route: categories_route_1.CategoryRoutes },
    { path: '/books', route: book_route_1.BookRoutes },
    { path: '/orders', route: order_route_1.OrderRoutes },
    { path: '/profile', route: profile_route_1.ProfileRoutes },
];
//configure the routes
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
