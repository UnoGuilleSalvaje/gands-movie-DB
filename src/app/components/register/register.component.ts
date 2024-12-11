import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formRegister: FormGroup;

  constructor(private userService: UserService, private router: Router) {
    this.formRegister = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellidoPaterno: new FormControl(''),
      apellidoMaterno: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      fechaNacimiento: new FormControl(''),
      sexo: new FormControl(''),
      rol: new FormControl('Cliente'),
      idDireccion: new FormControl(null),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.formRegister.valid) {
      const formData = {
        Nombre: this.formRegister.value.nombre,
        Apellido_Paterno: this.formRegister.value.apellidoPaterno,
        Apellido_Materno: this.formRegister.value.apellidoMaterno,
        Email: this.formRegister.value.email,
        Contraseña: this.formRegister.value.password,
        Fecha_Nacimiento: this.formRegister.value.fechaNacimiento,
        Sexo: this.formRegister.value.sexo,
        Rol: this.formRegister.value.rol,
        ID_Direccion: this.formRegister.value.idDireccion ? parseInt(this.formRegister.value.idDireccion, 10) : null,
      };
  
     // console.log('Datos enviados al backend:', formData);
  
      this.userService.register(formData).subscribe({
        next: (response) => {
          console.log('Usuario registrado exitosamente:', response);
          this.router.navigate(['/login']);
        },
        error: (error) => {
          console.error('Error al registrar usuario:', error);
          alert(error.error?.error || 'Error al registrar el usuario.');
        },
      });
    } else {
      alert('Por favor, completa todos los campos obligatorios.');
    }
  }
  
  goToLogin() {
    this.router.navigate(['/login']);
  }
  
}
