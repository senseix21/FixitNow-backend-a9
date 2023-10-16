"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const authenticate_1 = __importDefault(require("../../middlewares/authenticate"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const booking_controller_1 = require("./booking.controller");
const booking_validation_1 = require("./booking.validation");
const router = express_1.default.Router();
router.post('/', (0, authenticate_1.default)(user_1.ENUM_USER_ROLE.USER), (0, validateRequest_1.default)(booking_validation_1.BookingValidation.createBookingSchema), booking_controller_1.BookingController.createBooking);
router.get('/', (0, authenticate_1.default)(user_1.ENUM_USER_ROLE.USER, user_1.ENUM_USER_ROLE.ADMIN), booking_controller_1.BookingController.getBookingsByUser);
router.get('/all', (0, authenticate_1.default)(user_1.ENUM_USER_ROLE.ADMIN), booking_controller_1.BookingController.getAllBookings);
router.patch('/', (0, authenticate_1.default)(user_1.ENUM_USER_ROLE.ADMIN), (0, validateRequest_1.default)(booking_validation_1.BookingValidation.updateBookingSchema), booking_controller_1.BookingController.updateBookingStatus);
exports.BookingRoutes = router;
