import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor() {
    // Restaurar carrito desde el almacenamiento local
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    this.cartItemsSubject.next(savedCart);
  }

  // Obtener los elementos actuales (sincrónico)
  getCart(): any[] {
    return this.cartItemsSubject.value;
  }

  // Agregar un elemento al carrito
  addToCart(item: any): void {
    const currentCart = this.cartItemsSubject.value;
    const updatedCart = [...currentCart, item];
    this.cartItemsSubject.next(updatedCart); // Actualizar el BehaviorSubject
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Guardar en localStorage
  }

  // Eliminar un elemento del carrito
  removeFromCart(itemIndex: number): void {
    const currentCart = this.cartItemsSubject.value;
    const updatedCart = currentCart.filter((_, index) => index !== itemIndex);
    this.cartItemsSubject.next(updatedCart); // Actualizar el BehaviorSubject
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Guardar en localStorage
  }

  updateCart(items: any[]): void {
    this.cartItemsSubject.next(items); // Actualizar BehaviorSubject
    localStorage.setItem('cart', JSON.stringify(items)); // Guardar en localStorage
  }
  
  
}
