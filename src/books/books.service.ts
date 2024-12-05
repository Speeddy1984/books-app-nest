import { Injectable } from '@nestjs/common';

export interface Book {
    id: string;
    title: string;
    description: string;
    author: string;
  }
  
  export interface CreateBook {
    title: string;
    description: string;
    author: string;
  }
  
  @Injectable()
  export class BooksService {
    private books: Book[] = [];
  
    getAllBooks(): Book[] {
      return this.books;
    }
  
    getBookById(id: string): Book | undefined {
      return this.books.find((book) => book.id === id);
    }
  
    addBook(bookData: CreateBook): Book {
      const newBook: Book = {
        id: (this.books.length + 1).toString(),
        ...bookData,
      };
      this.books.push(newBook);
      return newBook;
    }
  }