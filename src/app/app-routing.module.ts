import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth/auth.guard'; // Importa el guard personalizado
import { AyudaComponent } from './pages/ayuda/ayuda.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { NovedadesComponent } from './pages/novedades/novedades.component';
import { MilistComponent } from './pages/milist/milist.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { AdministradorComponent } from './pages/administrador/administrador.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { PagoComponent } from './pages/pago/pago.component';
import { CantPeliculasCdMunicipioComponent } from './admin/cant-peliculas-cd-municipio/cant-peliculas-cd-municipio.component';
import { IngMetodoPagoComponent } from './admin/ing-metodo-pago/ing-metodo-pago.component';
import { IngresosPorPeliculasClasificacionComponent } from './admin/ingresos-por-peliculas-clasificacion/ingresos-por-peliculas-clasificacion.component';
import { PeliculasPopularesPorProtagonistaComponent } from './admin/peliculas-populares-por-protagonista/peliculas-populares-por-protagonista.component';
import { PeliculasPorPaisProductoraComponent } from './admin/peliculas-por-pais-productora/peliculas-por-pais-productora.component';
import { PromDuracComponent } from './admin/prom-durac/prom-durac.component';
import { PromUsuarioTresComprasComponent } from './admin/prom-usuario-tres-compras/prom-usuario-tres-compras.component';
import { RecaudadoComponent } from './admin/recaudado/recaudado.component';
import { RecomendacionesPorGeneroComponent } from './admin/recomendaciones-por-genero/recomendaciones-por-genero.component';
import { TolRecPaisComponent } from './admin/tol-rec-pais/tol-rec-pais.component';
import { TotDescuentoPorCuponComponent } from './admin/tot-descuento-por-cupon/tot-descuento-por-cupon.component';
import { UsuarioComponent } from './admin/usuario/usuario.component';
import { VentaComponent } from './admin/venta/venta.component';
import { ActoresComponent } from './admin/actores/actores.component';
import { CuponesComponent } from './admin/cupones/cupones.component';

const routes: Routes = [
  { path: 'admin/peliculas', component: PeliculasComponent },
  { path: 'admin/cupones', component: CuponesComponent },
  { path: 'admin/actores', component: ActoresComponent},
  { path: 'admin/Usuarios', component: UsuarioComponent},
  { path: 'admin/Ventas',component: VentaComponent},
  { path: 'admin/CantPeliculasCdMun', component: CantPeliculasCdMunicipioComponent},
  { path: 'admin/ingMetodoPago', component: IngMetodoPagoComponent},
  { path: 'admin/ingresoPorPeliculasClass', component: IngresosPorPeliculasClasificacionComponent},
  { path: 'admin/peliculasPopularesPorProtagonista', component: PeliculasPopularesPorProtagonistaComponent},
  { path: 'admin/peliculasPorPaisProduc', component: PeliculasPorPaisProductoraComponent},
  { path: 'admin/promDurac', component: PromDuracComponent},
  { path: 'admin/promUsuarioTresCompras', component: PromUsuarioTresComprasComponent},
  { path: 'admin/recaudado', component: RecaudadoComponent},
  { path: 'admin/recomendacionesPorGenero', component: RecomendacionesPorGeneroComponent},
  { path: 'admin/tolRecPais', component: TolRecPaisComponent},
  { path: 'admin/totDescuentoPorCupon', component: TotDescuentoPorCuponComponent},


  { path: 'pago', component: PagoComponent, canActivate: [AuthGuard] },
  { path: 'carrito', component: CarritoComponent, canActivate: [AuthGuard]},
  { path: 'perfil', component:PerfilComponent,canActivate: [AuthGuard]},
  { path: 'admin', component: AdministradorComponent, canActivate: [AuthGuard]},
  {path: 'peliculas', component: PeliculasComponent},
  { path: 'milist', component: MilistComponent, canActivate: [AuthGuard] },
  { path: 'novedades', component: NovedadesComponent },
  { path: 'contactanos', component: ContactanosComponent },
  { path: 'ayuda', component: AyudaComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, },
  { path: 'search', component: SearchComponent },
  { path: 'movie/:id', component: MovieDetailsComponent,  },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', pathMatch: 'full', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
