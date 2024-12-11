import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.scss']
})
export class VentaComponent implements OnInit {
  ventas: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.cargarVentas();
  }

  cargarVentas(): void {
    this.userService.getVentas().subscribe((data) => {
      this.ventas = data;
    });
  }

  editarVenta(venta: any): void {
    // Lógica para mostrar un formulario de edición para la venta
  }

  eliminarVenta(id: number): void {
    if (confirm('¿Estás seguro de eliminar esta venta?')) {
      this.userService.deleteVenta(id).subscribe(() => {
        this.cargarVentas(); // Recargar la lista de ventas
      });
    }
  }
}
