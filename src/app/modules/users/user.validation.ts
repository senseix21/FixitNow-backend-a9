import { z } from "zod";

const updateUserZodSchema = z.object({
    body: z.object({
        name: z.string({ required_error: "Name is required" }).optional(),
        email: z.string({ required_error: "Email is required" }).optional(),
        password: z.string({ required_error: "password is required" }).optional(),
        role: z.string({ required_error: "Role is required" }).optional(),
        contactNo: z.string({ required_error: "Contact No is required" }).optional(),
        address: z.string({ required_error: "Address is required" }).optional(),
        profileImg: z.string({ required_error: "profile Image is required" }).optional(),
    })
})

export const UserValidation = {
    updateUserZodSchema
}