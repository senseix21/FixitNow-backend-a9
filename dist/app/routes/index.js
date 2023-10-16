"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const admin_route_1 = require("../modules/admins/admin.route");
const auth_route_1 = require("../modules/auth/auth.route");
const booking_route_1 = require("../modules/booking/booking.route");
const cart_route_1 = require("../modules/carts/cart.route");
const category_route_1 = require("../modules/category/category.route");
const content_route_1 = require("../modules/contents/content.route");
const feedback_route_1 = require("../modules/feedback/feedback.route");
const notification_route_1 = require("../modules/notifications/notification.route");
const review_route_1 = require("../modules/review/review.route");
const serviceHistory_route_1 = require("../modules/serviceHistory/serviceHistory.route");
const service_route_1 = require("../modules/services/service.route");
const user_route_1 = require("../modules/user/user.route");
const router = express_1.default.Router();
const moduleRoutes = [
    { path: '/auth', route: auth_route_1.AuthRoutes },
    { path: '/admin', route: admin_route_1.AdminAuthRoutes },
    { path: '/category', route: category_route_1.CategoryRoutes },
    { path: '/services', route: service_route_1.ServicesRoutes },
    { path: '/cart', route: cart_route_1.CartRoutes },
    { path: '/booking', route: booking_route_1.BookingRoutes },
    { path: '/profile', route: user_route_1.ProfileRoutes },
    { path: '/review', route: review_route_1.ReviewRoutes },
    { path: '/serviceHistory', route: serviceHistory_route_1.ServiceHistoryRoutes },
    { path: '/content', route: content_route_1.ContentRoutes },
    { path: '/feedback', route: feedback_route_1.FeedbackRoutes },
    { path: '/notify', route: notification_route_1.NotificationRoutes },
];
//configure the routes
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
