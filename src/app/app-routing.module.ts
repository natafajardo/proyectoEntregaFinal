import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApadrinarComponent } from './pages/ayudar/apadrinar/apadrinar.component';
import { AyudarComponent } from './pages/ayudar/ayudar.component';
import { DonarComponent } from './pages/ayudar/donar/donar.component';
import { HomeComponent } from './pages/home/home.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { QuienesComponent } from './pages/quienes/quienes.component';

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
    path: "area-personal",
    component: PersonalComponent
  },
  {
    path: "apadrinar", 
    component: ApadrinarComponent
  },
  {
    path: "donar", 
    component: DonarComponent
  },
  {
    path: "auth",
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
