import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-tol-rec-pais',
  templateUrl: './tol-rec-pais.component.html',
  styleUrls: ['./tol-rec-pais.component.scss']
})
export class TolRecPaisComponent implements OnInit {
  totalRecaudadoPorPais: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getTotalRecaudadoPorPais().subscribe(data => {
      this.totalRecaudadoPorPais = data;
    });
  }
}
