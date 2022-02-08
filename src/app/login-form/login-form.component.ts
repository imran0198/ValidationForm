import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    email: new FormControl("",[Validators.required,Validators.pattern(/^[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]),
    pass:new FormControl("",[Validators.required,Validators.pattern(/^(\s|.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[^$#@%]*|\s)$/)])
  })

get email()
{
   return this.loginForm.get('email')
}

get pass(){
  return this.loginForm.get('pass')
}

sign()
{
  console.log(this.loginForm.value)
}


}
