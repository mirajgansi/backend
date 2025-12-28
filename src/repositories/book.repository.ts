import { Book } from "../types/books.type";


export const  books: Book[] = [
        {id: '1', title: '1984', date: '2020'},    
        {id: '2', title: 'To Kill a Mockingbird', date:"2020"},
        {id: '3', title: 'The Great Gatsby', date: "2021"}
    ];


export interface IbookRepoitory{
    getAllBooks(): Book[];
    createBook(book: Book): Book; 
    getBookById(id: string):Book | undefined;

}

export class BookRepository implements IbookRepoitory{
    createBook(book: Book): Book {
        books.push(book)
        return book;
    }
    getAllBooks(): Book[] {
        return books;
    }
    getBookById(id: string): Book | undefined {
        return books.find(book => book.id === id);
    }
}