import { z } from "zod";

const createBookingSchema = z.object({
    body: z.object({
        serviceId: z.string({ required_error: "Service ID is required" }),
        userId: z.string({ required_error: "User ID is required" }),
        date: z.string({ required_error: "Date is required" }),
    })
});

const updateBookingSchema = z.object({
    body: z.object({
        bookingId: z.string({ required_error: "Booking ID is required" }),
        status: z.string({ required_error: "Status is required" }),
    })
});

export const BookingValidation = {
    createBookingSchema,
    updateBookingSchema
}