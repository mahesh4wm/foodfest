import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { User } from '../models/user';
import { ActivatedRoute } from '@angular/router';





@Component({
  selector: 'app-sellerlogin',
  templateUrl: './sellerlogin.component.html',
  styleUrls: ['./sellerlogin.component.css']
})
export class SellerloginComponent implements OnInit {


  visibility_Of:boolean;
  visibility:boolean;
  matcardClass:boolean;
  passwordFieldType:String='Password';
  userLogin;
  userData={
    userName:"mahesh",
    email:"mahesh4wm@gmail.com",
    sex:"male",
    password:"maheshnanda1",

  };
  public hasError = (controlName: string, errorName: string) =>{
    return this.userLogin.controls[controlName].hasError(errorName);
  }

  // loginUser:User=new User();
  clickOnlogin(){
   
  }
  cliickOnRegister(){
   
  }
  clickOnForgotPassword(){
    
  }
  onClickShowPassword(){
    this.passwordFieldType="text";
    this.visibility=true;
    this.visibility_Of=false;
  }
  onClickHidePassword(){
    this.passwordFieldType="password";
    this.visibility=false;
    this.visibility_Of=true;
  }
  over(){
    this.matcardClass=true;
    
  }
  leave(){
    this.matcardClass=false;
  }
  loginSubmit(){
    
    if(this.userLogin.value.email == "mahesh4wm@gmail.com" && this.userLogin.value.password == "Maheshnanda1"){
       console.log("login success");
       this.router.navigate(['/dashbord']);
       
     }
     else{
      console.log("not valid");
    }
     
  }
 

  constructor(private router:Router ,private route: ActivatedRoute) { }
  ngOnInit() {
    this.visibility_Of=true;
    this.visibility=false;
    this.passwordFieldType="password"

    
   
    this.userLogin=new FormGroup({
      email: new FormControl("",[Validators.required,Validators.email]),
      password: new FormControl("",[Validators.required,Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')]),
      
    });
    
   
  }

}
