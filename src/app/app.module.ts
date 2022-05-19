import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JuegosComponent } from './juegos/juegos.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { Prueba1Component } from './juegos/prueba1/prueba1.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { AuthService } from './shared/services/auth.service';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { AhorcadoComponent } from './juegos/ahorcado/ahorcado.component';
import { MayormenorComponent } from './juegos/mayormenor/mayormenor.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { PreguntadosComponent } from './juegos/preguntados/preguntados.component';
import { HttpClientModule } from '@angular/common/http';
import { ClickerComponent } from './juegos/clicker/clicker.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    NavbarComponent,
    JuegosComponent,
    NotfoundComponent,
    Prueba1Component,
    ChatroomComponent,
    AhorcadoComponent,
    MayormenorComponent,
    RegisterComponent,
    PreguntadosComponent,
    ClickerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
