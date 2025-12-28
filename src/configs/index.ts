import dotenv from 'dotenv';
dotenv.config(); 

//Application level constant and config
export const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 5050;
// IF POrt is not defined in .env use 5050 as deafulat
export const MONGODB_URL: string =
    process.env.MONGODB_URL || 'mongodb://localhost:27012/default_db';
    //if MONGODB-UTI is not defined in .env, use local.backup mongodb as default
