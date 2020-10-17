import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchaccountsComponent } from './searchaccounts/searchaccounts.component';
import { NewaccountComponent } from './newaccount/newaccount.component';
import { AccountsdetailsComponent } from './accountsdetails/accountsdetails.component';


const routes: Routes = [
  {
    path:'',component:SearchaccountsComponent,
  },
  {
    path:'newacc',component:NewaccountComponent
  },
  {
    path:'accdtl',component:AccountsdetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
