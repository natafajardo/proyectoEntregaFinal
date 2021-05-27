import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApadrinarComponent } from './pages/ayudar/apadrinar/apadrinar.component';
import { AyudarComponent } from './pages/ayudar/ayudar.component';
import { DonarComponent } from './pages/ayudar/donar/donar.component';
import { DonacionesComponent } from './pages/donaciones/donaciones.component';
import { HomeComponent } from './pages/home/home.component';
import { QuienesComponent } from './pages/quienes/quienes.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "quienes-somos",
    component: QuienesComponent
  },
  {
    path: "como-ayudar",
    component: AyudarComponent
  },
  {
    path: "donaciones",
    component: DonacionesComponent
  },
  {
    path: "registro",
    component: RegistroComponent
  },
  {
    path: "apadrinar", 
    component: ApadrinarComponent
  },
  {
    path: "donar", 
    component: DonarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
