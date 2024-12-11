import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss'],
})
export class CarritoComponent implements OnInit {
  cartItems: any[] = [];
  subtotal: number = 0;
  couponCode: string = '';
  discount: number = 0;
  couponError: string = '';

  constructor(
    private cartService: CartService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe((items) => {
      this.cartItems = items.map((item) => ({
        ...item,
        quantity: item.quantity || 1,
      }));
      this.calculateSubtotal();
    });
  }

  increaseQuantity(index: number): void {
    this.cartItems[index].quantity++;
    this.updateCart();
  }

  decreaseQuantity(index: number): void {
    if (this.cartItems[index].quantity > 1) {
      this.cartItems[index].quantity--;
      this.updateCart();
    }
  }

  removeFromCart(index: number): void {
    this.cartItems.splice(index, 1);
    this.updateCart();
  }

  calculateSubtotal(): void {
    this.subtotal = this.cartItems.reduce(
      (total, item) => total + item.Precio * item.quantity,
      0
    );
  }

  updateCart(): void {
    this.cartService.updateCart(this.cartItems);
    this.calculateSubtotal();
  }

  applyCoupon(): void {
    if (!this.couponCode.trim()) {
      this.couponError = 'Por favor ingresa un código promocional.';
      return;
    }
  
    this.userService.validarCupon(this.couponCode.trim()).subscribe(
      (response: any) => {
        if (response.valido) {
          const { descuento, tipo } = response;
  
          // Calcular descuento según el tipo
          this.discount =
            tipo === 'porcentaje' ? this.subtotal * (descuento / 100) : descuento;
  
          this.couponError = '';
        } else {
          this.discount = 0; // Resetea el descuento
          this.couponError = response.mensaje || 'Cupón inválido o expirado.';
        }
      },
      (error) => {
        this.couponError = 'Error al validar el cupón. Inténtalo nuevamente.';
      }
    );
  }
  
  
  goToPayment(): void {
    const total = Math.max(0, this.subtotal - this.discount); // Asegurar que no sea negativo
    this.router.navigate(['/pago'], { state: { total } });
  }
  
}
