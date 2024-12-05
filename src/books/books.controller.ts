import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { BooksService, Book, CreateBook } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getAllBooks(): Book[] {
    return this.booksService.getAllBooks();
  }

  @Get(':id')
  getBookById(@Param('id') id: string): Book | undefined {
    return this.booksService.getBookById(id);
  }

  @Post()
  addBook(@Body() bookData: CreateBook): Book {
    return this.booksService.addBook(bookData);
  }
}
