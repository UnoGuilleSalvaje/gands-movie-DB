// ActoresComponent
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-actores',
  templateUrl: './actores.component.html',
  styleUrls: ['./actores.component.scss']
})
export class ActoresComponent implements OnInit {
  actores: any[] = [];
  actorSeleccionado: any = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.cargarActores();
  }

  cargarActores(): void {
    this.userService.getActores().subscribe((data) => {
      this.actores = data;
    });
  }

  editarActor(actor: any): void {
    this.actorSeleccionado = { ...actor };
  }

  guardarCambios(): void {
    if (this.actorSeleccionado) {
      const index = this.actores.findIndex(
        (actor) => actor.ID_Protagonista === this.actorSeleccionado.ID_Protagonista
      );
      const originalActor = { ...this.actores[index] };

      if (index !== -1) {
        this.actores[index] = { ...this.actorSeleccionado };
      }

      this.userService.updateActor(this.actorSeleccionado.ID_Protagonista, this.actorSeleccionado).subscribe({
        next: () => {
          this.actorSeleccionado = null;
        },
        error: () => {
          if (index !== -1) {
            this.actores[index] = originalActor;
          }
          alert('Hubo un error al guardar los cambios.');
        },
      });
    }
  }

  cancelarEdicion(): void {
    this.actorSeleccionado = null;
  }

  eliminarActor(id: number): void {
    if (confirm('¿Estás seguro de eliminar este actor?')) {
      this.userService.deleteActor(id).subscribe({
        next: () => this.cargarActores(),
        error: () => alert('Hubo un error al eliminar el actor.'),
      });
    }
  }
}