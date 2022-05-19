import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { HomeComponent } from './home/home.component';
import { AhorcadoComponent } from './juegos/ahorcado/ahorcado.component';
import { ClickerComponent } from './juegos/clicker/clicker.component';
import { JuegosComponent } from './juegos/juegos.component';
import { MayormenorComponent } from './juegos/mayormenor/mayormenor.component';
import { PreguntadosComponent } from './juegos/preguntados/preguntados.component';
import { Prueba1Component } from './juegos/prueba1/prueba1.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'chatroom',
    component: ChatroomComponent
  },
  {
    path: 'juegos', component: JuegosComponent , children : [ 
      
      {
        path: 'prueba1', component: Prueba1Component
      },
      {
        path: 'ahorcado', component: AhorcadoComponent
      },
      {
        path: 'mayormenor', component: MayormenorComponent
      },
      {
        path: 'preguntados', component: PreguntadosComponent
      },
      {
        path: 'clicker', component: ClickerComponent
      }/*
      {
        path: 'juego2', asdasd
      }
      */
     ]
    },
    { 
      path: 'register',
      component: RegisterComponent
    },
    { path: '**', component: NotfoundComponent}
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
