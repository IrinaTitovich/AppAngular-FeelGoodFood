import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GetDataService } from 'src/app/services/get-data.service';
import { LocalDataService } from 'src/app/services/local-data.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})


export class CreateAccountComponent implements OnInit {
  error=''
  message:string= ''
  @ViewChild('formCrAccEmail') formCrAccEmail:ElementRef
  @ViewChild('formCrAccPassword') formCrAccPassword:ElementRef
  formCreateAccount:FormGroup
  constructor(public localData:LocalDataService,public getData:GetDataService) { }

  ngOnInit(): void {
    this.formCreateAccount=new FormGroup({
      email:new FormControl('',[Validators.email,Validators.required]),
      password:new FormControl(null,[Validators.required, Validators.minLength(6)])
    })
  }

  submitNewUser(){
    this.localData.logOff()
    if(this.formCreateAccount.valid){
      const formData = {
        ...this.formCreateAccount.value
      }
      this.localData.users.email = this.formCreateAccount.value.email
      this.localData.users.password = this.formCreateAccount.value.password
      
      let req = {
        email:this.formCreateAccount.value.email
      }

      this.getData.connectUser(this.localData.users.urlConnectUser,req).subscribe(user=>{
        this.localData.users.username=user.username
        this.localData.users.hash=user.hash
        this.localData.updateUsers()
      },error=>{
        console.log(error)
        this.error=error.message;
      })
    }
    this.formCreateAccount.reset()
    this.message = `User ${this.localData.users.email} is created. Please, log in`
  }


  clearFormCrAcc(){
    this.formCrAccEmail.nativeElement.value=''
    this.formCrAccPassword.nativeElement.value=null
  }


}
