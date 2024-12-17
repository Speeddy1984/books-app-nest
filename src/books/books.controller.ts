import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './schemas/book.schema';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  async getAllBooks(): Promise<Book[]> {
    return this.booksService.getAllBooks();
  }

  @Get(':id')
  async getBookById(@Param('id') id: string): Promise<Book | null> {
    return this.booksService.getBookById(id);
  }

  @Post()
  async addBook(@Body() bookData: Partial<Book>): Promise<Book> {
    return this.booksService.addBook(bookData);
  }

  @Put(':id')
  async updateBook(
    @Param('id') id: string,
    @Body() bookData: Partial<Book>,
  ): Promise<Book | null> {
    return this.booksService.updateBook(id, bookData);
  }

  @Delete(':id')
  async deleteBook(@Param('id') id: string): Promise<Book | null> {
    return this.booksService.deleteBook(id);
  }
}
