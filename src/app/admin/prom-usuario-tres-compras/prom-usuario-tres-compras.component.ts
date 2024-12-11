import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-prom-usuario-tres-compras',
  templateUrl: './prom-usuario-tres-compras.component.html',
  styleUrls: ['./prom-usuario-tres-compras.component.scss']
})
export class PromUsuarioTresComprasComponent implements OnInit {
  promedioVentas: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getPromedioVentasPorUsuario().subscribe(data => {
      this.promedioVentas = data;
    });
  }
}
