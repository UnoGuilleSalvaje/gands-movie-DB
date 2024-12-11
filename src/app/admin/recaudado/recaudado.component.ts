import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-recaudado',
  templateUrl: './recaudado.component.html',
  styleUrls: ['./recaudado.component.scss']
})
export class RecaudadoComponent implements OnInit {
  recaudacionPorPelicula: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getRecaudacionPorPelicula().subscribe(data => {
      this.recaudacionPorPelicula = data;
    });
  }
}
