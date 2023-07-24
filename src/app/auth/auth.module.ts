import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { RegistORComponent } from './regist-or/regist-or.component';
import { RegisterComponent } from './registerClient/register.component';
import { RegisterDeliveryComponent } from './register-delivery/register-delivery.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    RegistORComponent,
    RegisterComponent,
    RegisterDeliveryComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class AuthModule { }
