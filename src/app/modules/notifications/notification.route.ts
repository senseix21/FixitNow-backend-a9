import express from "express";
import { ENUM_USER_ROLE } from "../../../enums/user";
import authenticate from "../../middlewares/authenticate";
import { NotificationController } from "./notification.controller";

const router = express.Router();

// Route for getting notifications by user ID
router.get("/",
    authenticate(ENUM_USER_ROLE.USER),
    NotificationController.getNotifications);

// Route for deleting a notification by ID
router.delete("/:id",
    authenticate(ENUM_USER_ROLE.USER),
    NotificationController.deleteNotification);

export const NotificationRoutes = router;
