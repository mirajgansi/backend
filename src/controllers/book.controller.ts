import { Request, Response } from "express";
import { Book, BookSchema } from "../types/books.type";
import { createBookDto } from "../dtos/books.dto";
import { books } from "../repositories/book.repository";
import { BookService } from "../services/book.service";

//zon schema has many fucntion like pick, omit,partial, etc.

// export type Book ={
//     id:String,
//     title: String,
//     date?: String
// }

let bookServices: BookService = new BookService();

export class BookController {
    createBook = (req: Request, res: Response) =>{
        try{
        const validation = createBookDto.safeParse(req.body);
        if(!validation.success){
            return res.status(400).json({error:validation.error})
        }
        
        const{id, title }= validation.data; 
        const newBook:Book= bookServices.createBook({id, title});
        return res.status(201).json(newBook)
        }catch(error:Error | any){
            return res.status(400).send(error.message ?? 'somthing went wring')
        }
        
        //const{id, title }= req.body; // destructure
        // cosnt id= req.body.id; const tile req=.bobdy.title
        // if(!id){
        //     return res.status(400).json({message: 'Id is required'});
        // }
        // if(!title){
        //     return res.status(400).json({message: 'title is required'});
        // }
        // const exist = books.find(book => book.id === id);
        // if(!exist){
        //     return res.status(400).json({message: `${id} already exist`});
        // }
        // const newBook: Book ={id, title};
        // //{id: id, title: tile}
        // books.push(newBook);
        // return res.status(201).json(newBook)
    }
    
    getBook =( req: Request, res: Response)=>{
    const return_book: Book[]= bookServices.getAllBooks();
    return res.status(200).json(return_book);
    }
}
