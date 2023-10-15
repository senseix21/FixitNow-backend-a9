import { Booking } from "@prisma/client";
import { prisma } from "../../../shared/prisma";
import { createServiceHistory } from "../serviceHistory/serviceHistory.service";
import { BookingStatus } from "./booking.constants";

const createBooking = async (serviceId: string, userId: string, date: Date): Promise<Booking> => {
    const checkIfDateIsAlreadyBooked = async (serviceId: string, userId: string, date: Date): Promise<void> => {
        const existingBooking = await prisma.booking.findFirst({
            where: {
                userId,
                serviceId,
                date,
            },
        });

        if (existingBooking) {
            throw new Error('This date is already booked for you.');
        }
    };

    // Fetch existing bookings for the same service and date
    const existingBookings = await prisma.booking.findMany({
        where: {
            serviceId,
            date,
        },
    });
    // Check if the date is already booked
    await checkIfDateIsAlreadyBooked(serviceId, userId, date);

    // Calculate the number of booked slots
    const bookedSlots = existingBookings.length;
    console.log(bookedSlots)

    // Calculate the available slots based on the total slots and booked slots
    let availableSlots = 5;
    if (bookedSlots > 0) {
        availableSlots = 5 - bookedSlots;
    } else {
        // If no one has booked on that date, one slot is reserved for the current booking
        availableSlots -= 1;
    }

    // If there are no available slots, throw an error
    if (availableSlots <= 0) {
        throw new Error('No available slots for this date.');
    }

    // If the date is not booked and there are available slots, create the booking
    const booking = await prisma.booking.create({
        data: {
            serviceId,
            userId,
            date,
            slotsAvailable: availableSlots,
        },
    });

    return booking;
};

const updateBookingStatus = async (bookingId: string, newStatus: BookingStatus): Promise<Booking | null> => {
    // Find the booking by ID
    const existingBooking = await prisma.booking.findUnique({
        where: {
            id: bookingId,
        },
    });

    if (!existingBooking) {
        // Handle the case where the booking is not found
        throw new Error('Booking not found.');
    }

    // Update the booking status
    const updatedBooking = await prisma.booking.update({
        where: {
            id: bookingId,
        },
        data: {
            status: newStatus,
        },
    });
    if (newStatus === BookingStatus.COMPLETED || BookingStatus.REJECTED) {
        // If the status is updated to COMPLETED | REJECTED, create a service history record
        await createServiceHistory(updatedBooking.userId, updatedBooking.serviceId);
    }
    return updatedBooking;
};

const getBookingsByUserId = async (userId: string): Promise<Booking[]> => {
    return prisma.booking.findMany({
        where: {
            userId: userId,
        },
    });
};


const getAllBookings = async (): Promise<Booking[]> => {
    const bookings = prisma.booking.findMany();
    console.log(bookings);

    return bookings;
};




export const BookingService = {
    createBooking,
    getBookingsByUserId,
    getAllBookings,
    updateBookingStatus
};
