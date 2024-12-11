// PeliculasComponent
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent implements OnInit {
  peliculas: any[] = [];
  peliculaSeleccionada: any = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.cargarPeliculas();
  }

  cargarPeliculas(): void {
    this.userService.getPeliculas().subscribe((data) => {
      this.peliculas = data;
    });
  }

  editarPelicula(pelicula: any): void {
    this.peliculaSeleccionada = { ...pelicula }; // Copia para evitar modificar directamente
  }

  guardarCambios(): void {
    if (this.peliculaSeleccionada) {
      const index = this.peliculas.findIndex(
        (pelicula) => pelicula.ID_Pelicula === this.peliculaSeleccionada.ID_Pelicula
      );
      const originalPelicula = { ...this.peliculas[index] };

      if (index !== -1) {
        this.peliculas[index] = { ...this.peliculaSeleccionada };
      }

      this.userService.updatePelicula(this.peliculaSeleccionada.ID_Pelicula, this.peliculaSeleccionada).subscribe({
        next: () => {
          this.peliculaSeleccionada = null;
        },
        error: () => {
          if (index !== -1) {
            this.peliculas[index] = originalPelicula;
          }
          alert('Hubo un error al guardar los cambios.');
        },
      });
    }
  }

  cancelarEdicion(): void {
    this.peliculaSeleccionada = null;
  }

  eliminarPelicula(id: number): void {
    if (confirm('¿Estás seguro de eliminar esta película?')) {
      this.userService.deletePelicula(id).subscribe({
        next: () => this.cargarPeliculas(),
        error: () => alert('Hubo un error al eliminar la película.'),
      });
    }
  }
}
