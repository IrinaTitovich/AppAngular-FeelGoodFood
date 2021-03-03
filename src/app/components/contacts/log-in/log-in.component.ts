import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalDataService } from 'src/app/services/local-data.service';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {


  email:string = ''

  @ViewChild('formEmail') formEmail:ElementRef
  @ViewChild('formPassword') formPassword:ElementRef

  message:string=''
  
  form:FormGroup
  constructor(public localData:LocalDataService) { 
  }

  ngOnInit(): void {
    this.form=new FormGroup({
      email:new FormControl('',[Validators.email,Validators.required,]),
      
      password:new FormControl(null,[
    Validators.required,Validators.minLength(6)
  ])
    })
  }

  submit(){

    if(this.form.valid){
      let email = this.form.value.email
      console.log(this.form.value.password)
      let indexOfUser = this.localData.getUserIndex(email)

      if (Boolean(indexOfUser+1)){
        let password = this.form.value.password
        let isPasswordCorrect = this.localData.isPassword(password,indexOfUser)
        if (isPasswordCorrect){
            console.log ('OK')
            this.localData.users.isUserConnected=true
            this.message=''
            this.localData.users.connectedUser=this.localData.users.users[indexOfUser]
            this.email=this.localData.users.connectedUser.email
            console.log(this.localData.users)
          }else{
          this.message='Wrong password'
        }
      }else{
        this.message='User with such email is not registed. Please, сreate account'
      }
      this.form.reset()
      this.addInfoToLocalLists()
  }
  }

  addInfoToLocalLists(){
    if(this.localData.users.connectedUser.shoppingList){
      this.localData.users.connectedUser.shoppingList.forEach((item)=>{
        this.localData.shoppingList.ingredients.add(item)
      })
    }
    if(!this.localData.users.connectedUser.favoriteRecipes){
      this.localData.users.connectedUser.favoriteRecipes = new Set
    }
  }



  clearForm(){
    this.formEmail.nativeElement.value=''
    this.formPassword.nativeElement.value=null
  }
}
