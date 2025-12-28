// import { BookRepository, IbookRepoitory } from "../repositories/book.repository";
// import { Book } from "../types/books.type";
// import { createBookDto } from "../dtos/books.dto";
// import { title } from "process";

// let bookRepository: IbookRepoitory = new BookRepository();

// export class BookService{

//     getAllBooks(): Book[] {
//         let response : Book[]= 
//             bookRepository
//                 .getAllBooks()
//                 .map((book:Book)=>{
//                 return{
//                 ...book,
//                 title: book.title.toUpperCase()
//                 }
//         });
//         return response;
//     }

//     createBook(bookDTO: createBookDto): Book {
//     const newBook: Book ={
//         id: bookDTO.id,
//         title: bookDTO.title
//     };
//     let exsitingBook = bookRepository.getBookById?.(newBook.id);
//     if (exsitingBook){
//         throw new Error(`${newBook.id} already exsiting`)
//     }
//     return bookRepository.createBook(newBook)
// }
// getBookById(id:number): Book[]{
//     let response: Book=
//    bookRepository.getBookById().map
//         .map((book:Book)=>{
//             return{
//                 ...book,
//                 id:book.id,
//                 title:book.title.toUpperCase()
                
//             }
//         })
//         return response
// }


// }
