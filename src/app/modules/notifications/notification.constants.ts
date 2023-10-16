/* eslint-disable no-unused-vars */
enum NotificationType {
    BOOKING_CREATION = "Your booking has been created, and pending for approval.",
    BOOKING_CONFIRMATION = "Your booking has been confirmed.",
    BOOKING_REJECTION = "Unfortunately, your booking has been rejected.",
    BOOKING_COMPLETED = "Your booking has been successfully completed.",
    PAYMENT_RECEIVED = "Payment for your booking has been received.",
    CANCELLATION = "Your booking has been canceled.",
    FEEDBACK_REQUEST = "We'd love to hear your feedback on our service."
}

export default NotificationType;
