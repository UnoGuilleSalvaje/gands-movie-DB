import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-tot-descuento-por-cupon',
  templateUrl: './tot-descuento-por-cupon.component.html',
  styleUrls: ['./tot-descuento-por-cupon.component.scss']
})
export class TotDescuentoPorCuponComponent implements OnInit {
  descuentosPorCupon: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getDescuentoPorCupon().subscribe(data => {
      this.descuentosPorCupon = data;
    });
  }
}
