import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { PlansRoutingModule } from './plans-routing.module';
import { NewplanComponent } from './newplan/newplan.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../core/api.service';


@NgModule({
  declarations: [NewplanComponent],
  imports: [
    CommonModule,
    PlansRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiService]
})
export class PlansModule { }
