import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-ingresos-por-peliculas-clasificacion',
  templateUrl: './ingresos-por-peliculas-clasificacion.component.html',
  styleUrls: ['./ingresos-por-peliculas-clasificacion.component.scss']
})
export class IngresosPorPeliculasClasificacionComponent implements OnInit {
  ingresosPorClasificacion: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getIngresosPorClasificacion().subscribe(data => {
      this.ingresosPorClasificacion = data;
    });
  }
}
