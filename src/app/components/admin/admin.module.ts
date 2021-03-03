import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { BrowserModule } from '@angular/platform-browser';
import { InformationComponent } from './information/information.component';



@NgModule({
  declarations: [
    AdminComponent,
    InformationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path:'',component:AdminComponent
      }
    ])
  ],
  exports:[
      RouterModule,
  ]
})
export class AdminModule { }
