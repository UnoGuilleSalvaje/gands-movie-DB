import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;

  constructor(private userService: UserService, private router: Router, private authService: AuthService) {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.formLogin.valid) {
        this.userService.login(this.formLogin.value).subscribe({
            next: (response) => {
                console.log('Respuesta del servidor:', response); // Para depuración
                
                // Guardar el token y actualizar datos del usuario
                localStorage.setItem('token', response.token);
                this.authService.setLoggedIn(true);

                // Asignar nombre, rol e ID de usuario correctamente
                this.authService.setUserName(response.user?.nombre || '');
                this.authService.setUserRole(response.user?.rol || '');
                this.authService.setIdUsuario(response.user?.id || 0); // Asignar ID de usuario

                // Redirigir al home
                this.router.navigate(['/home']);
            },
            error: (err) => {
                console.error('Error en el login:', err.error);
                alert(err.error.error || 'Error desconocido');
            },
        });
    }
}

  


  /* checkcontrol for email in formLogin */
  /* get email () {
    return this.formLogin.get('email');
  }
 */
  checkControl (controlName: string, errorName: string): boolean {
    if (
      this.formLogin.get(controlName)?.hasError(errorName) &&
      this.formLogin.get(controlName)?.touched
    ) {
      return true;
    } else {
      return false;
    }
  }

  goToRegister() {
    this.router.navigate(['/register']); // Asegúrate de que la ruta '/register' exista en tu configuración de enrutamiento
  }
}
