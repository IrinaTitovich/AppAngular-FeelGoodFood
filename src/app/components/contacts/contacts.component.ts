import { Component,  OnInit, ViewEncapsulation } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';
import { LocalDataService } from '../../services/local-data.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class ContactsComponent implements OnInit {
  
  

  logIn:Boolean =true
  btn:string ='Create Account'

  constructor(public localData:LocalDataService,public getData:GetDataService) { 

  }
  toggle(){
  if (!this.logIn){
    this.logIn=!this.logIn
    this.btn = 'Create Account'
  } else{
    this.logIn=!this.logIn
    this.btn = 'Log In'
  }
  }
  ngOnInit(): void {

  }
}
