import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  nombre: string;
  usuario: string;
  correo: string;

  constructor() { }

  ngOnInit(): void {
    const userData = JSON.parse(localStorage.getItem('current_user'));

    this.nombre = userData.nombre;
    this.usuario = userData.usuario;
    this.correo = userData.correo;
  }

}
