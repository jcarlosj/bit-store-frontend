import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formData: FormGroup;
  message!: String;
  classMessage!: String;

  constructor(
    private authService: AuthService,
  ) {
    this.formData = new FormGroup({
      username: new FormControl( '', [ Validators.required, Validators.email ] ),
      password: new FormControl( '', [ Validators.required, Validators.min( 6 ), Validators.max( 12 ) ] )
    });
  }

  handleLogin() {
    console.log( this.formData.value );

    this.authService.login( this.formData.value ).subscribe( ( data ) => {
      console.log( data );

      // Valida si no se logra autenticar el usuario
      if( ! data ) {
        this.classMessage = 'message error';
        this.message = 'Error de autenticacion';
      }

      // Oculta mensaje del formulario
      setTimeout( () => {
        this.classMessage = '';
        this.message = '';
      }, 2000 );

    });

  }
}
