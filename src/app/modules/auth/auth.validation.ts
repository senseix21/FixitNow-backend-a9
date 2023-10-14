import { z } from "zod";

const signUpValidationZodSchema = z.object({
    body: z.object({
        name: z.string({ required_error: "Name is required" }),
        email: z.string({ required_error: "Email is required" }),
        password: z.string({ required_error: "password is required" }),
        role: z.string({ required_error: "Role is required" }).optional(),
        contactNo: z.string({ required_error: "Contact No is required" }),
        address: z.string({ required_error: "Address is required" }),
        profileImg: z.string({ required_error: "profile Image is required" }),

    })
});

export const AuthValidataion = {
    signUpValidationZodSchema
}