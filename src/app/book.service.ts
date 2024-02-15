import { Injectable } from '@angular/core';

// Export the Book interface
export interface Book {
  title: string;
  price: number;
}

@Injectable({
  providedIn: 'root' 
})
export class BookService {
  private books: Book[] = [
    { title: 'The Power of Habit', price: 30 },
  { title: 'Sapiens: A Brief History of Humankind', price: 28 },
  { title: 'Atomic Habits', price: 27 },
  { title: 'Educated', price: 24 },
  ];

  private cartItems: Book[] = [];

  getBooks(): Book[] {
    return this.books;
  }

  addToCart(book: Book): void {
    this.cartItems.push(book);
  }

  getCartItems(): Book[] {
    return this.cartItems;
  }

  calculateTotalBill(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }

  // Add this method to expose cartItems
  getCart(): Book[] {
    return this.cartItems;
  }
}
