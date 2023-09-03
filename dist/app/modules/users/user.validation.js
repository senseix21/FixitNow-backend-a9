"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const updateUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: "Name is required" }).optional(),
        email: zod_1.z.string({ required_error: "Email is required" }).optional(),
        password: zod_1.z.string({ required_error: "password is required" }).optional(),
        role: zod_1.z.string({ required_error: "Role is required" }).optional(),
        contactNo: zod_1.z.string({ required_error: "Contact No is required" }).optional(),
        address: zod_1.z.string({ required_error: "Address is required" }).optional(),
        profileImg: zod_1.z.string({ required_error: "profile Image is required" }).optional(),
    })
});
exports.UserValidation = {
    updateUserZodSchema
};
