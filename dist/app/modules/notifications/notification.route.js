"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const authenticate_1 = __importDefault(require("../../middlewares/authenticate"));
const notification_controller_1 = require("./notification.controller");
const router = express_1.default.Router();
// Route for getting notifications by user ID
router.get("/", (0, authenticate_1.default)(user_1.ENUM_USER_ROLE.USER), notification_controller_1.NotificationController.getNotifications);
// Route for deleting a notification by ID
router.delete("/:id", (0, authenticate_1.default)(user_1.ENUM_USER_ROLE.USER), notification_controller_1.NotificationController.deleteNotification);
exports.NotificationRoutes = router;
