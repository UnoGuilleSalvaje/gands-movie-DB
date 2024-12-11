import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { CartService } from 'src/app/services/cart.service';  // Importa el servicio del carrito
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.scss'],
})
export class PagoComponent implements OnInit {
  total: number = 0;
  metodosPago: any[] = [];
  selectedMetodo: string = ''; // Mantén esto como string
  efectivoCantidad: number | null = null;
  tarjetaDatos = { numero: '', expiracion: '', cvv: '' };
  codigoPromocional: string = '';
  descuentoAplicado: number = 0;
  montoFaltante: number = 0; // Nueva propiedad para monto faltante

  constructor(private userService: UserService, private router: Router,private cartService: CartService, private authService: AuthService) {
    const navigation = this.router.getCurrentNavigation();
    this.total = navigation?.extras.state?.['total'] || 0;
  }

  ngOnInit(): void {
    this.userService.getMetodosPago().subscribe((response: any) => {
      this.metodosPago = Array.isArray(response) && Array.isArray(response[0])
        ? response[0]
        : response;
      console.log('Métodos de pago procesados:', this.metodosPago);
    });
  }

  procesarPago(): void {
    this.authService.idUsuarioin$.subscribe((idUsuario) => {
      // Validar si el monto faltante es mayor que 0 y la cantidad en efectivo es correcta
      if (this.montoFaltante > 0 && this.selectedMetodo === '1') {
        if (this.efectivoCantidad !== this.montoFaltante) {
          alert('La cantidad ingresada en efectivo debe ser igual al monto faltante.');
          return;
        }
      }
  
      if (
        this.selectedMetodo === '2' &&
        (!this.tarjetaDatos.numero || !this.tarjetaDatos.expiracion || !this.tarjetaDatos.cvv)
      ) {
        alert('Todos los campos de tarjeta son obligatorios.');
        return;
      }
  
      if (this.selectedMetodo === '3' && !this.codigoPromocional) {
        alert('Debe ingresar un código promocional.');
        return;
      }
  
      // Formatear la fecha a 'YYYY-MM-DD'
      const fecha = new Date().toISOString().split('T')[0]; // Solo obtiene la fecha (sin la hora)
  
      // Obtener carrito desde el localStorage
      const storedCart = localStorage.getItem('cart');
      const cartItems = storedCart ? JSON.parse(storedCart) : [];
  
      // Validar si el carrito está vacío
      if (cartItems.length === 0) {
        alert('El carrito está vacío.');
        return;
      }
  
      // Crear detalles de la venta dinámicamente a partir del carrito
      const detallesVenta = cartItems.map((item: any) => ({
        cantidad: item.quantity, // Usar la cantidad definida en el carrito
        precio_unitario: parseFloat(item.Precio), // Convertir el precio a número
        id_pelicula: item.ID_Pelicula, // Usar el ID de la película
      }));
  
      // Crear el objeto de venta
      const venta = {
        fecha: fecha, // Fecha en formato correcto
        monto_total: Math.max(0, this.total - this.descuentoAplicado), // Asegurar que no sea negativo
        id_usuario: idUsuario,
        id_metodo_pago: this.selectedMetodo,
        id_cupon: this.codigoPromocional || null,
        detalles: detallesVenta, // Usar los detalles dinámicos
      };
  
      // Llamar al servicio para procesar la venta
      this.userService.createVenta(venta).subscribe(
        () => {
          // Vaciar el carrito después de una venta exitosa
          this.cartService.updateCart([]);
          localStorage.removeItem('cart');
          alert('Pago procesado exitosamente');
          this.router.navigate(['/']);
        },
        (error) => {
          alert('Error al procesar el pago');
        }
      );
    });
  }
  
  
  
  validarCodigo(): void {
    if (!this.codigoPromocional.trim()) {
      alert('Por favor ingresa un código promocional.');
      return;
    }
  
    this.userService.validarCupon(this.codigoPromocional.trim()).subscribe(
      (response: any) => {
        if (response.valido) {
          // Calcular el descuento como porcentaje del total
          this.descuentoAplicado = this.total * (response.descuento / 100);
          this.codigoPromocional = response.id; // Usa el ID del cupón aquí
          this.montoFaltante = Math.max(0, this.total - this.descuentoAplicado); // Recalcular monto faltante
  
          alert(
            `Cupón válido. Descuento aplicado: ${response.descuento}%. Monto descontado: $${this.descuentoAplicado.toFixed(
              2
            )}`
          );
        } else {
          this.descuentoAplicado = 0; // Resetea el descuento
          this.codigoPromocional = ''; // Resetea el código promocional
          alert('Cupón inválido o expirado.');
        }
      },
      (error) => {
        alert('Error al validar el cupón. Inténtalo nuevamente.');
      }
    );
  }
  

}
