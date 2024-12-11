import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { SearchComponent } from './pages/search/search.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MoviesService } from './services/movies.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoviesSliderComponent } from './pages/movies-slider/movies-slider.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { AyudaComponent } from './pages/ayuda/ayuda.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { NovedadesComponent } from './pages/novedades/novedades.component';
import { MilistComponent } from './pages/milist/milist.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { AdministradorComponent } from './pages/administrador/administrador.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { PagoComponent } from './pages/pago/pago.component';
import { RecaudadoComponent } from './admin/recaudado/recaudado.component';
import { PromDuracComponent } from './admin/prom-durac/prom-durac.component';
import { TolRecPaisComponent } from './admin/tol-rec-pais/tol-rec-pais.component';
import { IngMetodoPagoComponent } from './admin/ing-metodo-pago/ing-metodo-pago.component';
import { CantPeliculasCdMunicipioComponent } from './admin/cant-peliculas-cd-municipio/cant-peliculas-cd-municipio.component';
import { PromUsuarioTresComprasComponent } from './admin/prom-usuario-tres-compras/prom-usuario-tres-compras.component';
import { TotDescuentoPorCuponComponent } from './admin/tot-descuento-por-cupon/tot-descuento-por-cupon.component';
import { IngresosPorPeliculasClasificacionComponent } from './admin/ingresos-por-peliculas-clasificacion/ingresos-por-peliculas-clasificacion.component';
import { PeliculasPorPaisProductoraComponent } from './admin/peliculas-por-pais-productora/peliculas-por-pais-productora.component';
import { PeliculasPopularesPorProtagonistaComponent } from './admin/peliculas-populares-por-protagonista/peliculas-populares-por-protagonista.component';
import { RecomendacionesPorGeneroComponent } from './admin/recomendaciones-por-genero/recomendaciones-por-genero.component';
import { UsuarioComponent } from './admin/usuario/usuario.component';
import { VentaComponent } from './admin/venta/venta.component';
import { ActoresComponent } from './admin/actores/actores.component';
import { CuponesComponent } from './admin/cupones/cupones.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieDetailsComponent,
    SearchComponent,
    NavbarComponent,
    MoviesSliderComponent,
    LoginComponent,
    RegisterComponent,
    AyudaComponent,
    ContactanosComponent,
    NovedadesComponent,
    MilistComponent,
    PeliculasComponent,
    AdministradorComponent,
    PerfilComponent,
    CarritoComponent,
    PagoComponent,
    RecaudadoComponent,
    PromDuracComponent,
    TolRecPaisComponent,
    IngMetodoPagoComponent,
    CantPeliculasCdMunicipioComponent,
    PromUsuarioTresComprasComponent,
    TotDescuentoPorCuponComponent,
    IngresosPorPeliculasClasificacionComponent,
    PeliculasPorPaisProductoraComponent,
    PeliculasPopularesPorProtagonistaComponent,
    RecomendacionesPorGeneroComponent,
    UsuarioComponent,
    VentaComponent,
    ActoresComponent,
    CuponesComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
