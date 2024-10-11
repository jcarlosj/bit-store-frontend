import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  formData!: FormGroup;
  message!: String;
  classMessage!: String;

  // Paso 1 (Reactive Forms): Inyeccion de dependencias
  constructor(
    private authService: AuthService
  ) {
    // Paso 2 (Reactive Forms): Define estructura
    this.formData = new FormGroup({
      name: new FormControl( '', [ Validators.required ] ),
      username: new FormControl( '', [ Validators.required, Validators.email ] ),
      password: new FormControl( '', [ Validators.required, Validators.min( 6 ), Validators.max( 12 ) ] )
    });
  }

  // Paso 4 (Reactive Forms): Obtener datos del formulario
  handleSubmit() {
    console.log( this.formData.value );   // { name: 'dasdasda', username: 'gc@test.com', password: '123456'}

    // Invocar el Servicio
    this.authService.register( this.formData.value ).subscribe( ( data: any ) => {
      console.log( '>>>', data );

      // Valida si la peticion fue exitosa y despliega
      if( data.ok )
        this.classMessage = 'message success';
      else
        this.classMessage = 'message error'

      // Oculta mensaje del formulario
      setTimeout( () => {
        this.classMessage = '';
        this.message = '';
      }, 2000 );

      // Asigna el mensaje
      this.message = data.msg!;
    });

    this.formData.reset();
  }
}
