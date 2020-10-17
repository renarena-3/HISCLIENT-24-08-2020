import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AccountsRoutingModule } from './accounts-routing.module';
import { SearchaccountsComponent } from './searchaccounts/searchaccounts.component';
import { AccountsdetailsComponent } from './accountsdetails/accountsdetails.component';
import { NewaccountComponent } from './newaccount/newaccount.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from 'src/app/core/api.service';

@NgModule({
  declarations: [SearchaccountsComponent, AccountsdetailsComponent, NewaccountComponent],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[ApiService]
})
export class AccountsModule { }
