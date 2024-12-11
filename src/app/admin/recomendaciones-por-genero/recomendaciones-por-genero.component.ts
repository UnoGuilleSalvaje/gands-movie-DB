import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service'; // Importa el servicio de autenticación

@Component({
  selector: 'app-recomendaciones-por-genero',
  templateUrl: './recomendaciones-por-genero.component.html',
  styleUrls: ['./recomendaciones-por-genero.component.scss']
})
export class RecomendacionesPorGeneroComponent implements OnInit {
  recomendaciones: any[] = [];

  constructor(
    private userService: UserService,
    private authService: AuthService // Servicio de autenticación
  ) {}

  ngOnInit(): void {
    // Se suscribe al ID del usuario para obtenerlo de manera dinámica
    this.authService.idUsuarioin$.subscribe(usuarioId => {
      if (usuarioId && usuarioId > 0) {
        // Realiza la llamada a la API para obtener las recomendaciones por género
        this.userService.getRecomendacionesPorGenero(usuarioId).subscribe(data => {
          this.recomendaciones = data;
        });
      } else {
        console.error('Usuario no autenticado o ID no válido');
      }
    });
  }
}
