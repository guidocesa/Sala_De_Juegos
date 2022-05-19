import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {

  constructor(public afs: AngularFirestore) { }

  allUsers = [];
  email = "";
  mensaje = "";
  getAllUsers() {
    return new Promise<any>((resolve)=> {
     this.afs.collection('chat').valueChanges().subscribe(users => resolve(users));
    })
   }

   async getUsers() {
    this.allUsers = await this.getAllUsers();  
   }
  ngOnInit(): void {
    this.getUsers()
    let aux = localStorage.getItem("user");
      if (aux != null){
        aux = JSON.parse(aux).email;
       this.setEmail(aux);
      }
  }

  setEmail(email : any){
    if (email!=null){
      this.email = email;
    }else{
      this.email = '';
    }
  }

  sendMessage(){
    if (this.mensaje != ""){
      this.afs.collection('chat').doc().set({user:this.email,message:this.mensaje});
      this.getUsers();
      this.mensaje = "";       
    }else{
      let body = document.getElementById('chatInput');
      body?.classList.add("error");
      setTimeout(() => {    
        body?.classList.remove("error");
      }, 1000);
    }

  }
  

}

