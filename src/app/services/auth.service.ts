import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient ) { }

  register( newUser: any ): any {
    return this.http.post( 'http://localhost:3001/api/auth/register', newUser );
  }
}
