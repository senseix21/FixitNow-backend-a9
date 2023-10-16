"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewValidation = void 0;
const zod_1 = require("zod");
const reviewCreateSchema = zod_1.z.object({
    body: zod_1.z.object({
        serviceId: zod_1.z.string({ required_error: 'Service ID is required' }),
        userId: zod_1.z.string({ required_error: 'User ID is required' }),
        rating: zod_1.z.number({ required_error: 'Rating is required and should be at least 1' }).min(1).max(5),
        comment: zod_1.z.string({ required_error: 'Comment is required and should be at least 10 characters' }).min(10),
    })
});
const reviewUpdateSchema = zod_1.z.object({
    rating: zod_1.z.number({ required_error: 'Rating is required and should be at least 1' }).min(1).max(5).optional(),
    comment: zod_1.z.string({ required_error: 'Comment is required and should be at least 10 characters' }).min(10).optional(),
});
exports.ReviewValidation = {
    reviewCreateSchema,
    reviewUpdateSchema
};
