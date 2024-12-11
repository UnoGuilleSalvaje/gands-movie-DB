import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-peliculas-populares-por-protagonista',
  templateUrl: './peliculas-populares-por-protagonista.component.html',
  styleUrls: ['./peliculas-populares-por-protagonista.component.scss']
})
export class PeliculasPopularesPorProtagonistaComponent implements OnInit {
  peliculasPopulares: any[] = [];
  protagonista: string = ''; // Campo para filtrar por protagonista

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  buscar(): void {
    if (this.protagonista.trim()) {
      this.userService.getPeliculasPopularesPorProtagonista(this.protagonista).subscribe(data => {
        this.peliculasPopulares = data;
      });
    }
  }
}
