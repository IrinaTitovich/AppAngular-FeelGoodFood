import { Component, OnInit, ViewChild } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';
import { LocalDataService } from '../../services/local-data.service';
// import { GetDataService } from '../services/get-data.service';
// import { LocalDataService } from '../services/local-data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})


export class AdminComponent implements OnInit {

  admin={
    email:'admin@admin',
    password:'admin',
    emailCurrent:'',
    passwordCurrent:'',
    toggle:false
  }

  logIn:Boolean =true
  btn:string ='Create Account'

  constructor(public localData:LocalDataService,public getData:GetDataService) { 
  }

  ngOnInit(): void {
  }

  setEmail(event){
    this.admin.emailCurrent=event.target.value
  }

  setPassword(event){
    this.admin.passwordCurrent=event.target.value
  }

  isAdmin(){
    if (this.admin.email===this.admin.emailCurrent){
      if (this.admin.password===this.admin.passwordCurrent){
        this.admin.toggle=true
      }
    }
  }


}
