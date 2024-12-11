import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-ing-metodo-pago',
  templateUrl: './ing-metodo-pago.component.html',
  styleUrls: ['./ing-metodo-pago.component.scss']
})
export class IngMetodoPagoComponent implements OnInit {
  ingresosPorMetodo: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getIngresosPorMetodoPago().subscribe(data => {
      this.ingresosPorMetodo = data;
    });
  }
}
