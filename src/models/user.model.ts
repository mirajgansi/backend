import mongoose ,{Document, mongo, Schema} from "mongoose"
import { UserType } from "../types/user.type";


const userMongoSchema: Schema = new Schema({
    firstName: {type: String, required: false},
    lastName: {type: String},
    email: {type: String, required: true, unique: true},
    userName: {type: String,equired: true, unique: true} ,
    password: {type: String, required: true},
    role: {type: String, enum:["user", "admin"], default:"user"},


},{
    timestamps:true // auto field - createAt ad updatAt
}

)
export interface IUser extends UserType, Document{
   _id:mongoose.Types.ObjectId; //extra mongo atrbute
   createdAt: Date,
   updatedAt: Date 
}

export const UserModel = mongoose.model<IUser>("User", userMongoSchema)