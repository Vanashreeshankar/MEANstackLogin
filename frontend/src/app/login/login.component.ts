
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailService } from '../services/email.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [EmailService]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null,[Validators.email,Validators.required]),
    password: new FormControl(null,[Validators.required]) 
  });

  signupForm: FormGroup = new FormGroup({
    name: new FormControl(null,[Validators.required]),
    email: new FormControl(null,[Validators.email,Validators.required]),
    password: new FormControl(null,[Validators.required]),
    cpass: new FormControl(null,[Validators.required])
  });

  constructor(private _userService:UserService, private _user:UserService, private _router:Router) { }

  ngOnInit() {
  }
   //moveToSignup(){
    //this._router.navigate(['/home']);
  //}
  
  login(){
    if(!this.loginForm.valid){
      console.log('Invalid');
      return;
    }
    this._user.login(JSON.stringify(this.loginForm.value))
    .subscribe(
      data => {console.log(data); this._router.navigate(['/home']);},
      error=>console.error(error)

    )
      //console.log(JSON.stringify(this.loginForm.value));
    
  }

  signup(){
    if(!this.signupForm.valid || (this.signupForm.controls.password.value != this.signupForm.controls.cpass.value)){

      console.log('Invalid');
      return;
    }
    this._userService.signup(JSON.stringify(this.signupForm.value))
    .subscribe(
      data => {console.log(data);},
      error=>console.error(error)
    )

    //console.log(JSON.stringify(this.signupForm.value));
     
  }
   
  
}