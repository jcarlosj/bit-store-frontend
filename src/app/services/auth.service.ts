import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Response } from '../interfaces/response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient ) { }

  register( newUser: any ): Observable<Response> {
    return this.http.post<Response>( 'http://localhost:3001/api/auth/register', newUser );
  }

  login( credentials: any ): Observable<Response> {
    return this.http.post<Response>( 'http://localhost:3001/api/auth/login', credentials );
  }
}
