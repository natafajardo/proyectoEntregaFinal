import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  uri: string;

  constructor(
    private http: HttpClient,
    public router: Router
  ) {

    this.uri = `http://localhost:3001/api`;
   }

  register(body) {
    return this.http.post(`${this.uri}/registrarUsuario`, body);
  }

  login(body) {
    return this.http.post(`${this.uri}/login`, body);
  }

  logout() {
    localStorage.removeItem("token");
    //this.router.navigate(['auth/login']);
  }

  isLogged() {
    if (localStorage.getItem("token")){
      return true;
    }
    return false;
  }
}
