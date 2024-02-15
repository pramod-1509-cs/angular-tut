import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book.service';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  cartItems: Book[] = [];
  totalBill: number = 0;
 
  constructor(private bookService: BookService) {
    this.cartItems = this.bookService.getCartItems();
    this.totalBill = this.bookService.calculateTotalBill();
  }
}
//here
