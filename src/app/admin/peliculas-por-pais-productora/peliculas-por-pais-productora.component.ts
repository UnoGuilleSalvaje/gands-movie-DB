import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-peliculas-por-pais-productora',
  templateUrl: './peliculas-por-pais-productora.component.html',
  styleUrls: ['./peliculas-por-pais-productora.component.scss']
})
export class PeliculasPorPaisProductoraComponent implements OnInit {
  peliculasPorPais: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getPeliculasDisponiblesPorPais().subscribe(data => {
      this.peliculasPorPais = data;
    });
  }
}
