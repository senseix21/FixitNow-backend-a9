"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryValidation = void 0;
const zod_1 = require("zod");
const createCategoryZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: "Category name not provided" })
    })
});
const UpdateCategoryZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: "Category name not provided" }).optional(),
    })
});
exports.CategoryValidation = {
    createCategoryZodSchema,
    UpdateCategoryZodSchema
};
