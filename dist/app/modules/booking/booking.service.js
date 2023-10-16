"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingService = void 0;
const prisma_1 = require("../../../shared/prisma");
const notification_constants_1 = __importDefault(require("../notifications/notification.constants"));
const notification_service_1 = require("../notifications/notification.service");
const serviceHistory_service_1 = require("../serviceHistory/serviceHistory.service");
const booking_constants_1 = require("./booking.constants");
const createBooking = (serviceId, userId, date) => __awaiter(void 0, void 0, void 0, function* () {
    const checkIfDateIsAlreadyBooked = (serviceId, userId, date) => __awaiter(void 0, void 0, void 0, function* () {
        const existingBooking = yield prisma_1.prisma.booking.findFirst({
            where: {
                userId,
                serviceId,
                date,
            },
        });
        if (existingBooking) {
            throw new Error('This date is already booked for you.');
        }
    });
    // Fetch existing bookings for the same service and date
    const existingBookings = yield prisma_1.prisma.booking.findMany({
        where: {
            serviceId,
            date,
        },
    });
    // Check if the date is already booked
    yield checkIfDateIsAlreadyBooked(serviceId, userId, date);
    // Calculate the number of booked slots
    const bookedSlots = existingBookings.length;
    console.log(bookedSlots);
    // Calculate the available slots based on the total slots and booked slots
    let availableSlots = 5;
    if (bookedSlots > 0) {
        availableSlots = 5 - bookedSlots;
    }
    else {
        // If no one has booked on that date, one slot is reserved for the current booking
        availableSlots -= 1;
    }
    // If there are no available slots, throw an error
    if (availableSlots <= 0) {
        throw new Error('No available slots for this date.');
    }
    // If the date is not booked and there are available slots, create the booking
    const booking = yield prisma_1.prisma.booking.create({
        data: {
            serviceId,
            userId,
            date,
            slotsAvailable: availableSlots,
        },
    });
    return booking;
});
const updateBookingStatus = (bookingId, newStatus) => __awaiter(void 0, void 0, void 0, function* () {
    // Find the booking by ID
    const existingBooking = yield prisma_1.prisma.booking.findUnique({
        where: {
            id: bookingId,
        },
    });
    if (!existingBooking) {
        // Handle the case where the booking is not found
        throw new Error('Booking not found.');
    }
    // Update the booking status
    const updatedBooking = yield prisma_1.prisma.booking.update({
        where: {
            id: bookingId,
        },
        data: {
            status: newStatus,
        },
    });
    if (newStatus === booking_constants_1.BookingStatus.COMPLETED || booking_constants_1.BookingStatus.REJECTED) {
        // If the status is updated to COMPLETED | REJECTED, create a service history record
        yield serviceHistory_service_1.ServiceHistoryService.createServiceHistory(updatedBooking.userId, updatedBooking.serviceId);
    }
    if (newStatus === booking_constants_1.BookingStatus.ACCEPTED) {
        yield notification_service_1.NotificationService.createNotification(updatedBooking.userId, notification_constants_1.default.BOOKING_CONFIRMATION);
    }
    else if (newStatus === booking_constants_1.BookingStatus.COMPLETED) {
        yield notification_service_1.NotificationService.createNotification(updatedBooking.userId, notification_constants_1.default.BOOKING_COMPLETED);
    }
    else if (newStatus === booking_constants_1.BookingStatus.REJECTED) {
        yield notification_service_1.NotificationService.createNotification(updatedBooking.userId, notification_constants_1.default.BOOKING_REJECTION);
    }
    return updatedBooking;
});
const getBookingsByUserId = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma_1.prisma.booking.findMany({
        where: {
            userId: userId,
        },
    });
});
const getAllBookings = () => __awaiter(void 0, void 0, void 0, function* () {
    const bookings = prisma_1.prisma.booking.findMany();
    console.log(bookings);
    return bookings;
});
exports.BookingService = {
    createBooking,
    getBookingsByUserId,
    getAllBookings,
    updateBookingStatus
};
