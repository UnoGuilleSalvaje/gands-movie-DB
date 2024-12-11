import { Injectable } from '@angular/core';

import { Observable, of  } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserService {
 
 
  
    private apiUrl = 'http://localhost:3000'; // URL del servidor Node.js
  
    constructor(private http: HttpClient) {}
  
    login({ email, password }: { email: string; password: string }): Observable<any> {
      const body = { Email: email, Contraseña: password };
      return this.http.post(`${this.apiUrl}/login`, body);
    }

    register(user: any): Observable<any> {
      return this.http.post(`${this.apiUrl}/registro`, user, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      });
    }
    
    getPeliculas(): Observable<any> {
      return this.http.get(`${this.apiUrl}/peliculas/detalles`);
    }
    
    buscarPeliculas(query: string): Observable<any> {
      return this.http.get(`${this.apiUrl}/peliculas/buscar?query=${query}`);
    }
    
    isAuthenticated(): boolean {
      return !!localStorage.getItem('token'); // Ejemplo usando un token en localStorage
    }
    
    // Obtener métodos de pago
getMetodosPago(): Observable<any> {
  return this.http.get(`${this.apiUrl}/metodos-pago`);
}

// Crear venta
createVenta(venta: any): Observable<any> {
  console.log('Datos de venta enviados al servidor:', venta);
  return this.http.post(`${this.apiUrl}/ventas`, venta, {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  });
}


// Obtener detalles de una venta
getVentaDetalles(idVenta: number): Observable<any> {
  return this.http.get(`${this.apiUrl}/detalle-venta/${idVenta}`);
}

// Obtener cupones activos
getCupones(): Observable<any> {
  return this.http.get(`${this.apiUrl}/cupones`);
}

validarCupon(codigo: string): Observable<any> {
  return this.http.get(`${this.apiUrl}/cupones/validar/${codigo}`).pipe(
    map((response: any) => {
      if (response.valido) {
        return {
          valido: true,
          descuento: response.descuento,
          tipo: response.tipo, // 'porcentaje' o 'monto fijo'
          id: response.id,
        };
      } else {
        return { valido: false, descuento: 0, mensaje: response.mensaje };
      }
    }),
    catchError((error) => {
      console.error('Error al validar el cupón', error);
      return of({ valido: false, descuento: 0, mensaje: 'Error al validar el cupón' });
    })
  );
}
///Administrador
//Usuario
getUsuarios(): Observable<any> {
  return this.http.get(`${this.apiUrl}/usuarios`);
}

updateUsuario(id: number, usuario: any): Observable<any> {
  return this.http.put(`${this.apiUrl}/usuarios/${id}`, usuario, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  });
}

deleteUsuario(id: number): Observable<any> {
  return this.http.delete(`${this.apiUrl}/usuarios/${id}`);
}
 /////Ventas
 getVentas(): Observable<any> {
  return this.http.get(`${this.apiUrl}/ventas`);
}

updateVenta(id: number, venta: any): Observable<any> {
  return this.http.put(`${this.apiUrl}/ventas/${id}`, venta, {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  });
}

deleteVenta(id: number): Observable<any> {
  return this.http.delete(`${this.apiUrl}/ventas/${id}`);
}

//Consultas

//1
getRecaudacionPorPelicula(): Observable<any> {
  return this.http.get(`${this.apiUrl}/recaudacion-pelicula`);
}
//2
getPromedioDuracionPorGenero(): Observable<any> {
  return this.http.get(`${this.apiUrl}/promedio-duracion-genero`);
}

getRecaudacionPorPaisProductoras(): Observable<any> {
  return this.http.get(`${this.apiUrl}/recaudacion-pais-productoras`);
}
//4
getIngresosPorMetodoPago(): Observable<any> {
  return this.http.get(`${this.apiUrl}/ingresos-metodo-pago`);
}
/*
getPeliculasVendidasPorMunicipio(): Observable<any> {
  return this.http.get(`${this.apiUrl}/peliculas-vendidas-municipio`);
}*/

//6
getPromedioVentasPorUsuario(): Observable<any> {
  return this.http.get(`${this.apiUrl}/promedio-ventas-usuarios`);
}
//7
getDescuentoPorCupon(): Observable<any> {
  return this.http.get(`${this.apiUrl}/descuento-cupones`);
}
//8
getIngresosPorClasificacion(): Observable<any> {
  return this.http.get(`${this.apiUrl}/ingresos-clasificacion`);
}
//3
getPeliculasDisponiblesPorPais(): Observable<any> {
  return this.http.get(`${this.apiUrl}/peliculas-disponibles-por-pais`);
}
getTotalRecaudadoPorPais(): Observable<any> {
  return this.http.get(`${this.apiUrl}/total-recaudado-por-pais`);
}

//11
getRecomendacionesPorGenero(usuarioId: number): Observable<any> {
  return this.http.get(`${this.apiUrl}/recomendaciones/${usuarioId}`);
}
//10
getPeliculasPopularesPorProtagonista(protagonista: string): Observable<any> {
  return this.http.get(`${this.apiUrl}/peliculas-populares/${protagonista}`);
}
//5
getPeliculasPorMunicipio(): Observable<any> {
  return this.http.get(`${this.apiUrl}/peliculas-por-municipio`);
}



updatePelicula(id: number, pelicula: any): Observable<any> {
  return this.http.put(`${this.apiUrl}/peliculas/${id}`, pelicula, {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  });
}

deletePelicula(id: number): Observable<any> {
  return this.http.delete(`${this.apiUrl}/peliculas/${id}`);
}

// Cupones

updateCupon(id: number, cupon: any): Observable<any> {
  return this.http.put(`${this.apiUrl}/cupones/${id}`, cupon, {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  });
}

deleteCupon(id: number): Observable<any> {
  return this.http.delete(`${this.apiUrl}/cupones/${id}`);
}

// Actores
getActores(): Observable<any> {
  return this.http.get(`${this.apiUrl}/actores`);
}

updateActor(id: number, actor: any): Observable<any> {
  return this.http.put(`${this.apiUrl}/actores/${id}`, actor, {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  });
}

deleteActor(id: number): Observable<any> {
  return this.http.delete(`${this.apiUrl}/actores/${id}`);
}


}