import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  usuario: string = "Desconocido";

  constructor(public auth: AuthService) { }

  ngOnInit(): void {    
    this.usuario = JSON.parse(localStorage.getItem('current_user'))?.usuario;
  }
 
  logout() {
    this.auth.doLogout();
  }

}
