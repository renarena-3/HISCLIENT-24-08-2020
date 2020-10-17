import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent, ForgotComponent, SignupComponent],
  imports: [
    CommonModule,
    IndexRoutingModule,
    FormsModule
  ]
})
export class IndexModule { }
