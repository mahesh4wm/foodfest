import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-seller-regestration',
  templateUrl: './seller-regestration.component.html',
  styleUrls: ['./seller-regestration.component.css']
})
export class SellerRegestrationComponent implements OnInit {
  registration;
  
  visibility_Of:boolean;
  visibility:boolean;
  matcardClass:boolean;
  // email:string="mahesh4wm@gmail.com";
  passwordFieldType:String='Password';
  public hasError = (controlName: string, errorName: string) =>{
    return this.registration.controls[controlName].hasError(errorName);
    console.log(this.registration.controls[controlName].hasError(errorName));
  }
  genders: any = [
    {value: 'male', viewValue: 'male'},
    {value: 'female', viewValue: 'female'},
    {value: 'other', viewValue: 'other'}
  ];
  restaurentTypes: any = [
    {value: 'Brasserie and bistro', viewValue: 'Brasserie and bistro'},
    {value: 'Buffet and smörgåsbord', viewValue: 'Buffet and smörgåsbord'},
    {value: 'Cafeteria', viewValue: 'Cafeteria'},
    {value: 'Coffee house', viewValue: 'Coffee house'},
    {value: 'Destination restaurant', viewValue: 'Destination restaurant'},
    {value: 'Greasy spoon', viewValue: 'Greasy spoon'},
    {value: 'Tabletop cooking', viewValue: 'Tabletop cooking'},
    {value: 'Mongolian barbecue', viewValue: 'Mongolian barbecue'},
    {value: 'Pub', viewValue: 'Pub'},
    {value: 'Teppanyaki-style', viewValue: 'Teppanyaki-style'}
  ];
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
    
    // if(this.loginUser.email == "mahesh4wm@gmail.com" && this.loginUser.password == "maheshnanda1"){
      
    // }
  }
 

  constructor() { }

  ngOnInit() {
    this.visibility_Of=true;
    this.visibility=false;
    this.passwordFieldType="password";
    

    this.registration=new FormGroup({
    restaurantName: new FormControl("",[Validators.required]),
    tinNumber:new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required,Validators.email]),
    // userName:new FormControl(this.email,[Validators.required]),
    restaurentType:new FormControl("",[Validators.required]),
    firstName : new FormControl("",[Validators.required]),
    // email: new FormControl("",[Validators.required,Validators.email]),
    houseNumber:new FormControl("",[Validators.required]),
    flatNumber:new FormControl("",[Validators.required]),
    city:new FormControl("",[Validators.required]),
    area:new FormControl("",[Validators.required]),
    restaurentPincode:new FormControl("",[Validators.required]),
    ownerName:new FormControl("",[Validators.required]),
    ownerDob:new FormControl("",[Validators.required]),
    ownerGender:new FormControl("",[Validators.required]),
    adharNumber:new FormControl("",[Validators.required]),
    ownerMobileNumber:new FormControl("",[Validators.required]),
    ownerHouseNumber:new FormControl("",[Validators.required]),
    ownerFlatNumber:new FormControl("",[Validators.required]),
    ownerCityName:new FormControl("",[Validators.required]),
    ownerArea:new FormControl("",[Validators.required]),
    ownerPincode:new FormControl("",[Validators.required]),
    gender:new FormControl("",[Validators.required]),
    mobileNumber:new FormControl("",[Validators.required,Validators.maxLength(10)]),
    password: new FormControl("",[Validators.required,Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})'),Validators.max(30)]),
  })
  };

}
