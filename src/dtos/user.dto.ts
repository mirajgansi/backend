import { UserSchema } from "../types/user.type";
import z from "zod"

export const CreateUserDto= UserSchema.pick({
    firstName:true,
    lastName: true,
    username: true,
    email: true,
    password: true
}
).extend( // add addtion attributes
    {
        confirmPassword: z.string().min(6)
    }
).refine(
    (data) => data.password == data.confirmPassword,
    {
        message:"Password do not match",
        path:['confirmPassword'] // set the path of the error tot "cofirmPassword"
    }
)

export type CreateUserDto =z.infer<typeof CreateUserDto>;