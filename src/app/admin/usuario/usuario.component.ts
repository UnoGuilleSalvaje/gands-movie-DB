import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  usuarios: any[] = [];
  usuarioSeleccionado: any = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios(): void {
    this.userService.getUsuarios().subscribe((data) => {
      this.usuarios = data.filter((usuario: any) => usuario.Estado === 'Activo');
    });
  }

  editarUsuario(usuario: any): void {
    this.usuarioSeleccionado = { ...usuario }; // Crear una copia para evitar modificar directamente la lista
  }

  guardarCambios(): void {
    if (this.usuarioSeleccionado) {
      const index = this.usuarios.findIndex(
        (usuario) => usuario.ID_Usuario === this.usuarioSeleccionado.ID_Usuario
      );
  
      if (index !== -1) {
        const originalUsuario = { ...this.usuarios[index] }; // Backup del usuario original
  
        // Actualización optimista
        this.usuarios[index] = { ...this.usuarioSeleccionado };
  
        this.userService.updateUsuario(this.usuarioSeleccionado.ID_Usuario, this.usuarioSeleccionado).subscribe({
          next: () => {
            alert('Usuario actualizado correctamente.');
            this.usuarioSeleccionado = null; // Cerrar formulario
          },
          error: (err) => {
            // Revertir cambios si ocurre un error
            this.usuarios[index] = originalUsuario;
            console.error('Error al guardar los cambios:', err);
            alert(err.error?.error || 'Hubo un error al guardar los cambios.');
          },
        });
      }
    }
  }
  
  
  

  cancelarEdicion(): void {
    this.usuarioSeleccionado = null; // Cerrar el formulario sin guardar cambios
  }

  eliminarUsuario(id: number): void {
    if (confirm('¿Estás seguro de eliminar este usuario?')) {
      const originalUsuarios = [...this.usuarios]; // Backup de la lista actual
  
      // Actualización optimista: eliminar el usuario localmente
      this.usuarios = this.usuarios.filter((usuario) => usuario.ID_Usuario !== id);
  
      this.userService.deleteUsuario(id).subscribe({
        next: () => {
          alert('Usuario eliminado correctamente.');
        },
        error: (err) => {
          // Revertir cambios si ocurre un error
          this.usuarios = originalUsuarios;
          console.error('Error al eliminar el usuario:', err);
          alert(err.error?.error || 'Hubo un error al eliminar el usuario.');
        },
      });
    }
  }
  
  
  
}
