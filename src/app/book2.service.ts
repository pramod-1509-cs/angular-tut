import { Injectable } from '@angular/core';

// Export the Book interface
export interface Book2 {
  title: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
}) 
export class NewBookService {
    private newBooks: Book2[] = [
        { title: 'Moonlight Sonata', price: 18 },
        { title: 'Echoes of Eternity', price: 22 },
        { title: 'Whispers in the Wind', price: 16 },
        { title: 'Starlight Serenade', price: 21 },
      ];

  private cartItems: Book2[] = [];

  getBooks(): Book2[] {
    return this.newBooks;
  }

  addToCart(book2: Book2): void {
    this.cartItems.push(book2);
  }

  getCartItems(): Book2[] {
    return this.cartItems;
  }

  calculateTotalBill(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }

  // Add this method to expose cartItems
  getCart(): Book2[] {
    return this.cartItems;
  }
}
