import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  uri: string;

  constructor(
    private http: HttpClient
  ) {

    this.uri = `http://localhost:3001/api`;
   }

  register(body) {
    return this.http.post(`${this.uri}/registrarUsuario`, body);
  }

  login(body) {
    return this.http.post(`${this.uri}/login`, body);
  }
}
