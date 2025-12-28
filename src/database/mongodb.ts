import mongoose from "mongoose";
import { MONGODB_URL } from "../configs";


export const connectDb = async () =>{
    try {
        await mongoose.connect(MONGODB_URL);
        console.log("connected to Mongodb");
    }catch(e){
        console.error("MongoDB error: ", e)
        process.exit(1); //exit with failure
    }

}