

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormControlName, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReistartionService } from '../services/reistartion.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _fb:FormBuilder,private ser:ReistartionService, private _rout:Router) { }
  loginForm:FormGroup=new FormGroup({})
  ngOnInit(): void {

    this.loginForm=this._fb.group({
      email:new FormControl("",[Validators.required, Validators.email]),
      password: new FormControl("",[Validators.required]),
    })
  }
  submitted=false

  masssage=""

  save(){
    this.submitted=true;
    if(this.loginForm.invalid){
      return
     }
    console.log(">>>>>>>>>>>>>", this.loginForm.value)
    this.ser.login(this.loginForm.value).subscribe((res:any)=>{
      console.log(res);
      const data= JSON.stringify(res)
      const response = localStorage.setItem("login",data) 
      // this.masssage="Login Successfull"

      if(res){
       this._rout.navigate(["index"])  
      }
    }, error=>{
      console.log(error);
      this.masssage=error.massage
    })
  }

}
