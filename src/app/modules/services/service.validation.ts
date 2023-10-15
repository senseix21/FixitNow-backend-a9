import { z } from "zod";

const createServiceZodSchema = z.object({
    body: z.object({
        title: z.string({ required_error: "Title is required." }),
        description: z.string({ required_error: "Description is required." }),
        price: z.number({ required_error: "Price is required." }),
        image: z.string({ required_error: "Image is required." }),
        categoryId: z.string({ required_error: "Category is required." }),
    }),
});


const UpdateServiceZodSchema = z.object({
    body: z.object({
        title: z.string({ required_error: "Title is required." }).optional(),
        description: z.string({ required_error: "Description is required." }),
        price: z.number({ required_error: "Price is required." }),
        image: z.string({ required_error: "Image is required." }),
        categoryId: z.string({ required_error: "Category is required." }),
    }),
});

export const ServicesValidation = {
    createServiceZodSchema,
    UpdateServiceZodSchema
}