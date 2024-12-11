import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss'],
})
export class PeliculasComponent implements OnInit {
  peliculas: any[] = [];
  peliculasFiltradas: any[] = [];
  query: string = ''; // Nombre
  duracion?: number; // Duración máxima
  clasificacion: string = ''; // Clasificación
  precio?: number; // Precio máximo
  genero: string = ''; // Género
  idioma: string = ''; // Idioma
  isLoggedIn: boolean = false;
  constructor(private userService: UserService,private router: Router,private authService: AuthService,private cartService: CartService) {
    this.authService.loggedIn$.subscribe((status) => (this.isLoggedIn = status));
  }

  redirigirLogin() {
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    this.userService.getPeliculas().subscribe((data) => {
      this.peliculas = data;
      this.peliculasFiltradas = data;
    });
  }

  buscarPeliculas(): void {
    this.peliculasFiltradas = this.peliculas.filter((pelicula) => {
      const matchesTitulo =
        !this.query || pelicula.Titulo.toLowerCase().includes(this.query.toLowerCase());
      const matchesDuracion = !this.duracion || pelicula.Duracion <= this.duracion;
      const matchesClasificacion =
        !this.clasificacion ||
        pelicula.Clasificacion.toLowerCase().includes(this.clasificacion.toLowerCase());
      const matchesPrecio = !this.precio || pelicula.Precio <= this.precio;
      const matchesGenero =
        !this.genero ||
        pelicula.Generos.some((gen: string) =>
          gen.toLowerCase().includes(this.genero.toLowerCase())
        );
      const matchesIdioma =
        !this.idioma ||
        pelicula.Idiomas.some((lang: string) =>
          lang.toLowerCase().includes(this.idioma.toLowerCase())
        );

      return (
        matchesTitulo &&
        matchesDuracion &&
        matchesClasificacion &&
        matchesPrecio &&
        matchesGenero &&
        matchesIdioma
      );
    });
  }

  comprarPelicula(pelicula: any): void {
    const isAuthenticated = this.userService.isAuthenticated(); // Método para verificar autenticación
    if (isAuthenticated) {
      alert(`Has seleccionado la película: ${pelicula.Titulo}`);
      // Lógica adicional para procesar la compra
      this.cartService.addToCart(pelicula);
    } else {
      alert('Por favor, inicia sesión para comprar esta película.');
      this.router.navigate(['/login']);
    }
  }
}
