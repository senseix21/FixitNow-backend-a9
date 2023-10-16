"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-unused-vars */
var NotificationType;
(function (NotificationType) {
    NotificationType["BOOKING_CREATION"] = "Your booking has been created, and pending for approval.";
    NotificationType["BOOKING_CONFIRMATION"] = "Your booking has been confirmed.";
    NotificationType["BOOKING_REJECTION"] = "Unfortunately, your booking has been rejected.";
    NotificationType["BOOKING_COMPLETED"] = "Your booking has been successfully completed.";
    NotificationType["PAYMENT_RECEIVED"] = "Payment for your booking has been received.";
    NotificationType["CANCELLATION"] = "Your booking has been canceled.";
    NotificationType["FEEDBACK_REQUEST"] = "We'd love to hear your feedback on our service.";
})(NotificationType || (NotificationType = {}));
exports.default = NotificationType;
