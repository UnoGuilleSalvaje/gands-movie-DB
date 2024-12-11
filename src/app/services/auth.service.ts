// auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Estado de autenticación
  private loggedInSubject = new BehaviorSubject<boolean>(false);
  loggedIn$ = this.loggedInSubject.asObservable();

  // Nombre de usuario
  private userNameSubject = new BehaviorSubject<string>('');
  userName$ = this.userNameSubject.asObservable();

  // Rol del usuario
  private userRoleSubject = new BehaviorSubject<string>('');
  userRole$ = this.userRoleSubject.asObservable();

  // ID del usuario (cambiado a número)
  private userIdUsuarioSubject = new BehaviorSubject<number>(0);
  idUsuarioin$ = this.userIdUsuarioSubject.asObservable();


  constructor() {
    this.restoreSession(); // Restaurar sesión al cargar el servicio
  }

  // Establecer el estado de login
  setLoggedIn(value: boolean) {
    this.loggedInSubject.next(value);
    localStorage.setItem('isLoggedIn', JSON.stringify(value)); // Guardar en localStorage
  }

  // Establecer el nombre de usuario
  setUserName(name: string) {
    this.userNameSubject.next(name);
    localStorage.setItem('userName', name); // Guardar en localStorage
  }

  // Establecer el rol del usuario
  setUserRole(role: string) {
    this.userRoleSubject.next(role);
    localStorage.setItem('userRole', role); // Guardar en localStorage
  }

  // Establecer el ID de usuario (ahora como número)
  setIdUsuario(idUsuario: number) {
    this.userIdUsuarioSubject.next(idUsuario); // Actualiza el BehaviorSubject con el número
    localStorage.setItem('idUsuario', idUsuario.toString()); // Guarda en localStorage como cadena
  }

  // Obtener el estado de login
  get isLoggedIn() {
    return this.loggedInSubject.value;
  }

  // Obtener el nombre de usuario
  get userName() {
    return this.userNameSubject.value;
  }

  // Obtener el rol del usuario
  get userRole() {
    return this.userRoleSubject.value;
  }

  get userId(){
    return this.userIdUsuarioSubject.value;
  }

  // Restaurar la sesión desde localStorage
  restoreSession() {
    const loggedIn = localStorage.getItem('isLoggedIn');
    const userName = localStorage.getItem('userName');
    const userRole = localStorage.getItem('userRole');
    const idUsuario = localStorage.getItem('idUsuario');

    if (loggedIn === 'true') {
      this.setLoggedIn(true);
      if (userName) this.setUserName(userName);
      if (userRole) this.setUserRole(userRole);
      if (idUsuario) this.setIdUsuario(Number(idUsuario));  // Convierte de cadena a número
    } else {
      this.logout(); // Limpiar sesión si no hay datos válidos
    }
  }

  // Cerrar sesión
  logout() {
    this.setLoggedIn(false);
    this.setUserName('');
    this.setUserRole('');
    this.userIdUsuarioSubject.next(0); // Restablecer el ID de usuario

    // Limpiar localStorage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    localStorage.removeItem('userRole');
    localStorage.removeItem('idUsuario');
  }
}
