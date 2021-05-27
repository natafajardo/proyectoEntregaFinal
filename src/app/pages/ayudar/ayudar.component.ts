import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ayudar',
  templateUrl: './ayudar.component.html',
  styleUrls: ['./ayudar.component.scss']
})
export class AyudarComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  navigateTo(ruta): void {
    this.router.navigate([ruta]);
  }

}
