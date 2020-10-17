import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path:'',component:MenuComponent
  },  
  {
        path:'accounts',loadChildren:() => import('../admin/admin.module').then(m =>m.AdminModule)
  },
  {
        path:'plans',loadChildren:() => import('../plans/plans.module').then(m =>m.PlansModule)
  },
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }