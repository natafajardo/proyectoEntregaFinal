import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { QuienesComponent } from './pages/quienes/quienes.component';
import { AyudarComponent } from './pages/ayudar/ayudar.component';
import { ApadrinarComponent } from './pages/ayudar/apadrinar/apadrinar.component';
import { DonarComponent } from './pages/ayudar/donar/donar.component';
import { AuthModule } from './auth/auth.module';
import { PersonalComponent } from './pages/personal/personal.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    QuienesComponent,
    AyudarComponent,
    ApadrinarComponent,
    DonarComponent,
    PersonalComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
