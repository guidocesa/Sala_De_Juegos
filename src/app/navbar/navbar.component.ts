import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { Subscription } from 'rxjs';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentUser: any;
  loggedin: boolean = false;
  private update : Subscription;

  constructor(public authService: AuthService, private routing:Router, private serv : CommonService) {

    this.update= this.serv.getUpdate().subscribe
             (message => { //message contains the data sent from service
             this.refreshLogin();
             });
   }

  ngOnInit() {
    console.log(this.currentUser);
    this.currentUser = localStorage.getItem("user");
    this.refreshLogin();
  }
  
  refreshLogin(){
    this.currentUser = localStorage.getItem("user");
    console.log(this.currentUser);
    if(this.currentUser !== null && this.currentUser !== undefined && this.currentUser != "null")
    {
      this.loggedin = true;
    }
    else
    {
      this.loggedin = false;
    }
    
  }


  salir(){
    this.currentUser = null;
    localStorage.removeItem("user");
    this.authService.SignOut()
    this.loggedin = false;
    this.routing.navigate(['/login']);
    window.location.reload();
  }
}


