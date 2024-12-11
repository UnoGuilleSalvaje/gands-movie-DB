import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-prom-durac',
  templateUrl: './prom-durac.component.html',
  styleUrls: ['./prom-durac.component.scss']
})
export class PromDuracComponent implements OnInit {
  promedioDuracion: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getPromedioDuracionPorGenero().subscribe(data => {
      this.promedioDuracion = data;
    });
  }
}
