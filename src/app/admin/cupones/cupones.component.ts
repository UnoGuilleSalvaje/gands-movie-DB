// CuponesComponent
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cupones',
  templateUrl: './cupones.component.html',
  styleUrls: ['./cupones.component.scss']
})
export class CuponesComponent implements OnInit {
  cupones: any[] = [];
  cuponSeleccionado: any = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.cargarCupones();
  }

  cargarCupones(): void {
    this.userService.getCupones().subscribe((data) => {
      this.cupones = data;
    });
  }

  editarCupon(cupon: any): void {
    this.cuponSeleccionado = { ...cupon };
  }

  guardarCambios(): void {
    if (this.cuponSeleccionado) {
      const index = this.cupones.findIndex(
        (cupon) => cupon.ID_Cupon === this.cuponSeleccionado.ID_Cupon
      );
      const originalCupon = { ...this.cupones[index] };

      if (index !== -1) {
        this.cupones[index] = { ...this.cuponSeleccionado };
      }

      this.userService.updateCupon(this.cuponSeleccionado.ID_Cupon, this.cuponSeleccionado).subscribe({
        next: () => {
          this.cuponSeleccionado = null;
        },
        error: () => {
          if (index !== -1) {
            this.cupones[index] = originalCupon;
          }
          alert('Hubo un error al guardar los cambios.');
        },
      });
    }
  }

  cancelarEdicion(): void {
    this.cuponSeleccionado = null;
  }

  eliminarCupon(id: number): void {
    if (confirm('¿Estás seguro de eliminar este cupón?')) {
      this.userService.deleteCupon(id).subscribe({
        next: () => this.cargarCupones(),
        error: () => alert('Hubo un error al eliminar el cupón.'),
      });
    }
  }
}
