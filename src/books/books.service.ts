import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from './schemas/book.schema';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

  async getAllBooks(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }

  async getBookById(id: string): Promise<Book | null> {
    return this.bookModel.findById(id).exec();
  }

  async addBook(data: Partial<Book>): Promise<Book> {
    const newBook = new this.bookModel(data);
    return newBook.save();
  }

  async updateBook(id: string, data: Partial<Book>): Promise<Book | null> {
    return this.bookModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async deleteBook(id: string): Promise<Book | null> {
    return this.bookModel.findByIdAndDelete(id).exec();
  }
}
