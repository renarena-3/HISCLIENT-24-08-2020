import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivateaccComponent } from './activateacc/activateacc.component';


const routes: Routes = [
  {
    path:'menu',loadChildren:() => import('./menu/menu.module').then(m => m.MenuModule)
  },
  {
    path:'',loadChildren:() => import('./index/index.module').then(m => m.IndexModule) 
  },
 {
   path:'unlockAcc/:email',
   component:ActivateaccComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
