import httpStatus from "http-status";
import { Secret } from "jsonwebtoken";
import config from "../../../config";
import { jwtHelpers } from "../../../helpers/jwthelpers";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import NotificationType from "../notifications/notification.constants";
import { NotificationService } from "../notifications/notification.service";
import { BookingService } from "./booking.service";

const createBooking = catchAsync(async (req, res) => {
    const accessToken: any = req.headers.authorization;
    const decodedToken = jwtHelpers.verifyToken(accessToken, config.jwt.secret as Secret);
    const userId = decodedToken.userId;
    const { serviceId, date } = req.body;
    const result = await BookingService.createBooking(serviceId, userId, date);
    if (result) {
        await NotificationService.createNotification(userId, NotificationType.BOOKING_CREATION)
    }

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Booking created successfully!",
        data: result,
    });
});



const getBookingsByUser = catchAsync(async (req, res) => {
    const accessToken: any = req.headers.authorization;
    const decodedToken = jwtHelpers.verifyToken(accessToken, config.jwt.secret as Secret);
    const userId = decodedToken.userId;
    const bookings = await BookingService.getBookingsByUserId(userId);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Bookings retrieved successfully!",
        data: bookings,
    });
});

const getAllBookings = catchAsync(async (req, res) => {

    const bookings = await BookingService.getAllBookings();

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Bookings retrieved successfully!",
        data: bookings,
    });
});

const updateBookingStatus = catchAsync(async (req, res) => {
    const { bookingId, status } = req.body
    const bookings = await BookingService.updateBookingStatus(bookingId, status);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Booking status updated successfully!",
        data: bookings,
    });
});

export const BookingController = {
    createBooking,
    getBookingsByUser,
    getAllBookings,
    updateBookingStatus
};
