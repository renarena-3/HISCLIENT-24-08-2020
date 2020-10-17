import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchaccountsComponent } from '../admin/accounts/searchaccounts/searchaccounts.component';
import { NewplanComponent } from './newplan/newplan.component';


const routes: Routes = [
 {path:'',component:NewplanComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlansRoutingModule { }
