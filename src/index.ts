import express, {Application, Request, Response} from 'express'
import bodyParser from 'body-parser'

import dotenv from 'dotenv';
import { PORT } from './configs';
import { connectDb } from './database/mongodb';

dotenv.config();
//Can use .env variables after this
console.log(process.env.PORT);
// env -> port =5050

const app = express ();
// const port = 3000;

app.use(bodyParser.json())

app.get('/',(req: Request, res: Response)=>{
    res.send('Hello world');
});


async function startServer() {
    await connectDb();
    app.listen(
    PORT,
    ()=>{
        console.log(`Server: http://localhost:${PORT}`);
    }
) ;  
}

startServer();