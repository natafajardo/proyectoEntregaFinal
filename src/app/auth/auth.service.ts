import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { map } from 'rxjs/operators';

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

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

  register(body) {
    return this.http.post(`${this.uri}/registrarUsuario`, body);
  }
  
  doLogin(body) {
    return this.http.post(`${this.uri}/login`, body).pipe(
      map((res: any) => {
        localStorage.setItem('access_token', res.token);
        localStorage.setItem('current_user', JSON.stringify(res.user));
        this.router.navigate(['/home']);
      })
    );
  }

  doLogout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('current_user');
  }

}
