import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistORComponent } from './regist-or/regist-or.component';
import { RegisterComponent } from './registerClient/register.component';
import { RegisterDeliveryComponent } from './register-delivery/register-delivery.component';

const routes: Routes = [
 
  { path: 'Login',component:LoginComponent},
  { path: 'RegisterOR',component:RegistORComponent },
  { path: 'RegisterClient',component:RegisterComponent},
  { path: 'RegisterDelivery',component:RegisterDeliveryComponent}
 
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
  ,
  exports: [RouterModule]
})
export class AppRoutingModule { }
