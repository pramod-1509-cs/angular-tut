import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book.service';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  books: Book[] = [];

  constructor(private bookService: BookService) {
    this.books = this.bookService.getBooks();
  }

  addToCart(book: Book): void {
    this.bookService.addToCart(book);
  }
}
