import { z } from 'zod';

const reviewCreateSchema = z.object({
    body: z.object({
        serviceId: z.string({ required_error: 'Service ID is required' }),
        userId: z.string({ required_error: 'User ID is required' }),
        rating: z.number({ required_error: 'Rating is required and should be at least 1' }).min(1).max(5),
        comment: z.string({ required_error: 'Comment is required and should be at least 10 characters' }).min(10),
    })
});

const reviewUpdateSchema = z.object({
    rating: z.number({ required_error: 'Rating is required and should be at least 1' }).min(1).max(5).optional(),
    comment: z.string({ required_error: 'Comment is required and should be at least 10 characters' }).min(10).optional(),
});

export const ReviewValidation = {
    reviewCreateSchema,
    reviewUpdateSchema
};

