import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  errors:string='';
  public loginInvalid = false;

  constructor(public _route:Router){}
  Loginform:FormGroup=new FormGroup({
    username:new FormControl(null,[Validators.pattern('^[A-Z][a-z0-9]*$'),Validators.required]),
    password:new FormControl(null,[Validators.required]),
  });

  submitLogin(Loginform:FormGroup){
   
  }








}
