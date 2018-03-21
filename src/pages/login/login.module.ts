import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import{FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    MatCardModule,
    MatFormFieldModule,
    FormsModule
  ],

  entryComponents: [
    LoginPage
  ],
})
export class LoginPageModule {}
