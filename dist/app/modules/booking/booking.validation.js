"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingValidation = void 0;
const zod_1 = require("zod");
const createBookingSchema = zod_1.z.object({
    body: zod_1.z.object({
        serviceId: zod_1.z.string({ required_error: "Service ID is required" }),
        date: zod_1.z.string({ required_error: "Date is required" }),
    })
});
const updateBookingSchema = zod_1.z.object({
    body: zod_1.z.object({
        bookingId: zod_1.z.string({ required_error: "Booking ID is required" }),
        status: zod_1.z.string({ required_error: "Status is required" }),
    })
});
exports.BookingValidation = {
    createBookingSchema,
    updateBookingSchema
};
