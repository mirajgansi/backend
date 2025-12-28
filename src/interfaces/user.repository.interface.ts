import { User, UserDocument } from "../types/user.type";

export interface userResponseInterface{
    createUser(user: User): Promise<UserDocument>
    getUsers(): Promise<UserDocument[]>;
}


