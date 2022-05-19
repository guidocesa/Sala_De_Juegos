import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../shared/services/auth.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  correo:string = "";
  password:string = "";
  repetirPassword:string = "";
  mensaje:string = "";
  nombreReg:string[] = [];

  constructor(private authService: AuthService, private router: Router, private db: AngularFireDatabase, private title:Title ) { }

  ngOnInit() {
    this.title.setTitle("Sala de Juegos - Registro");
  }

  Register() {

    if ((this.password == null || this.password == "") || (this.repetirPassword == null || this.repetirPassword == "") || (this.correo == null || this.correo == "")) {
      this.mensaje = "Faltan datos, por favor, complete todos los campos";
    }
    else {

      if (this.password == this.repetirPassword) {
        this.nombreReg = this.correo.split('@');
        this.authService.SignUp(this.correo, this.password).then(response => {

            this.authService.getCurrentUser().then((response: any) => {
            this.db.list('usuarios').set('UID: '+response.uid, { correo:response.email, id: response.uid });
            this.authService.SignOut();
            this.router.navigate(['/Principal']);
          });

        }).catch(error => this.mensaje = error);
        
        
      } else {
        this.mensaje = "Las contraseñas no son iguales";
      }
    }
  }

}