import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  
  currentUser: string | null = null;
  profileHidden:boolean = true;

  ngOnInit(): void {

    this.currentUser = localStorage.getItem("user");
    console.log(this.currentUser);
    if(this.currentUser != null && this.currentUser.length > 0)
    {
      this.profileHidden = false;
    }
    else
    {
      this.profileHidden = true;
    }
    
  }

}
