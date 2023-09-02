import { z } from "zod";

const createBookZodSchema = z.object({
    body: z.object({
        title: z.string({ required_error: "Title is required." }),
        author: z.string({ required_error: "Author is required." }),
        price: z.string({ required_error: "Price is required." }),
        genre: z.string({ required_error: "Genre is required." }),
        publicationDate: z.string({ required_error: " Publication is required." }),
        categoryId: z.string({ required_error: "Category is required." }),
    }),
});


const UpdateBookZodSchema = z.object({
    body: z.object({
        title: z.string({ required_error: "Title is required." }).optional(),
        author: z.string({ required_error: "Author is required." }).optional(),
        price: z.string({ required_error: "Price is required." }).optional(),
        genre: z.string({ required_error: "Genre is required." }).optional(),
        publicationDate: z.string({ required_error: " Publication is required." }).optional(),
        categoryId: z.string({ required_error: "Category is required." }).optional(),
    }),
});

export const BookValidation = {
    createBookZodSchema,
    UpdateBookZodSchema
}