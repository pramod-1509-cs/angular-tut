import { Component } from '@angular/core';
import { NewBookService, Book2 } from '../book2.service';

@Component({
  selector: 'app-fiction',
  templateUrl: './fiction.component.html',
  styleUrls: ['./fiction.component.css'],
  providers: [NewBookService]  // Add this line to provide the service for this component if not already provided at the root level
})
export class FictionComponent {
  fictionBooks: Book2[] = [];
  cartItems: Book2[] = [];

  constructor(private newBookService: NewBookService) {
    this.fictionBooks = this.newBookService.getBooks();
  }

  addToCart(book2: Book2): void {
    this.newBookService.addToCart(book2);
    this.cartItems = this.newBookService.getCartItems();
  }

  getTotalBill(): number {
    return this.newBookService.calculateTotalBill();
  }
}
