"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesValidation = void 0;
const zod_1 = require("zod");
const createServiceZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({ required_error: "Title is required." }),
        description: zod_1.z.string({ required_error: "Description is required." }),
        price: zod_1.z.number({ required_error: "Price is required." }),
        image: zod_1.z.string({ required_error: "Image is required." }),
        categoryId: zod_1.z.string({ required_error: "Category is required." }),
    }),
});
const UpdateServiceZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({ required_error: "Title is required." }).optional(),
        description: zod_1.z.string({ required_error: "Description is required." }),
        price: zod_1.z.number({ required_error: "Price is required." }),
        image: zod_1.z.string({ required_error: "Image is required." }),
        categoryId: zod_1.z.string({ required_error: "Category is required." }),
    }),
});
exports.ServicesValidation = {
    createServiceZodSchema,
    UpdateServiceZodSchema
};
