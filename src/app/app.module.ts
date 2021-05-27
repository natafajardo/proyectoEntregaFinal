import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { QuienesComponent } from './pages/quienes/quienes.component';
import { AyudarComponent } from './pages/ayudar/ayudar.component';
import { DonacionesComponent } from './pages/donaciones/donaciones.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ApadrinarComponent } from './pages/ayudar/apadrinar/apadrinar.component';
import { DonarComponent } from './pages/ayudar/donar/donar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    QuienesComponent,
    AyudarComponent,
    DonacionesComponent,
    RegistroComponent,
    ApadrinarComponent,
    DonarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
