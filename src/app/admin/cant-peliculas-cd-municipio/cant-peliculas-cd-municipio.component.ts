import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cant-peliculas-cd-municipio',
  templateUrl: './cant-peliculas-cd-municipio.component.html',
  styleUrls: ['./cant-peliculas-cd-municipio.component.scss']
})
export class CantPeliculasCdMunicipioComponent implements OnInit {
  peliculasPorMunicipio: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getPeliculasPorMunicipio().subscribe(data => {
      this.peliculasPorMunicipio = data;
    });
  }
}
