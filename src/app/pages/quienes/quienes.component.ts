import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quienes',
  templateUrl: './quienes.component.html',
  styleUrls: ['./quienes.component.scss']
})
export class QuienesComponent implements OnInit {

  teams = [];

  constructor() { }

  ngOnInit(): void {
    this.teams = [
      {
        name: "Carolina Guacheta",
        role: "Lider Tecnico",
        img: "../../../assets/img/quienes/diana.jpg"
      },
      {
        name: "Natalia Fajardo",
        role: "Product owner",
        img: "../../../assets/img/quienes/natalia.jpg"
      },
      {
        name: "Jonathan Maldonado",
        role: "Scrum Master",
        img: "../../../assets/img/quienes/jonathan.jpg"
      },
      {
        name: "Andres Florido",
        role: "Scrum Team",
        img: "../../../assets/img/quienes/andres.jpg"
      },
      {
        name: "Yoneider Lopez",
        role: "Scrum Team",
        img: "../../../assets/img/quienes/yoneider.jpg"
      },
      {
        name: "Layoner Murgas",
        role: "Scrum Team",
        img: "../../../assets/img/quienes/layo.jpg"
      },
    ]
  }

}
