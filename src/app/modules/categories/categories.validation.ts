import { z } from "zod";

const createCategoryZodSchema = z.object({
    body: z.object({
        name: z.string({ required_error: "Category name not provided" })
    })
});

const UpdateCategoryZodSchema = z.object({
    body: z.object({
        name: z.string({ required_error: "Category name not provided" }).optional(),
    })
});

export const CategoryValidation = {
    createCategoryZodSchema,
    UpdateCategoryZodSchema
}