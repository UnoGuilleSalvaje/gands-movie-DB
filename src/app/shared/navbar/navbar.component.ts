import { Component, HostListener, OnInit,ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [ './navbar.component.scss' ]
})
export class NavbarComponent implements OnInit {
  navBackground: any;
  loggedIn = false;
  userName: string = '';
  userRole: string = ''; // Nueva propiedad para el rol del usuario
  cartCount: number = 0;
  @HostListener('document:scroll') scrollover() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.navBackground = {
        'background-color': '#0e0e0ede',
      };
    } else {
      this.navBackground = {};
    }
  }

  constructor(private authService: AuthService, private router: Router,private cartService: CartService,private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.authService.loggedIn$.subscribe((status) => {
      this.loggedIn = status;
    });

    this.authService.userName$.subscribe((name) => {
      this.userName = name;
    });

    this.authService.userRole$.subscribe((role) => {
      this.userRole = role;
    });
    this.cartService.cartItems$.subscribe((items) => {
      this.cartCount = items.length;
      this.cdr.detectChanges();
    });


  }

  onLogout(): void {
    localStorage.removeItem('token');
    this.authService.setLoggedIn(false);
    this.authService.setUserName('');
    this.authService.setUserRole('');
    this.router.navigate(['/login']);
  }
}
