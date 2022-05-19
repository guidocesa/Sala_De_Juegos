import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mensaje:string= '';

  constructor(public routing:Router, public authService: AuthService, private AFauth: AngularFireAuth, private serv : CommonService ) 
  {
    
  }

  ngOnInit(): void {
  }

  redirect()
  {
    this.routing.navigateByUrl('juegos');
  }

  login(mail: string, password: string) {
    this.authService.SignIn(mail, password).then(response => {
      this.routing.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
        this.serv.sendUpdate("refresh");
        this.routing.navigate(['/juegos']);
        window.location.reload();
    }); 
    }).catch(error => this.mensaje = error);
  }
}
