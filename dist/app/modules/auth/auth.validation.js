"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthValidataion = void 0;
const zod_1 = require("zod");
const signUpValidationZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: "Name is required" }),
        email: zod_1.z.string({ required_error: "Email is required" }),
        password: zod_1.z.string({ required_error: "password is required" }),
        role: zod_1.z.string({ required_error: "Role is required" }).optional(),
        contactNo: zod_1.z.string({ required_error: "Contact No is required" }),
        address: zod_1.z.string({ required_error: "Address is required" }),
        profileImg: zod_1.z.string({ required_error: "profile Image is required" }),
    })
});
exports.AuthValidataion = {
    signUpValidationZodSchema
};
