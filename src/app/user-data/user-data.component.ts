import { Component, OnInit } from '@angular/core';
import { locateHostElement } from '@angular/core/src/render3/instructions';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {Common} from '../models/Common';
import {MatSnackBar} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormControl, FormGroup ,Validators} from '@angular/forms';
import { FormsModule,ReactiveFormsModule,} from '@angular/forms';
@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  userView=true;
  userEditView=false;

  common:any=new Common();

  public user:any={}
  public oldUser:any={}
  

  constructor(private router:Router ,private route: ActivatedRoute,public dialog: MatDialog,private snackBar: MatSnackBar) { 
   this.oldUser={
      firstName:"mahesh",
      lastName:"kumar",
      fullName:this.common.concat1("mahesh","nanda"),
      sex:"male",
      age:26,
   };
   this.user = Object.assign({}, this.oldUser);
  // this.user=this.oldUser;
  //  console.log("user",this.user)
  }

  ngOnInit() {
  
  }
  openEditView(){
      this.userView=false;
      this.userEditView=true;
  }
  cancle(){
    this.userView=true;
    this.userEditView=false;
    this.user.firstName=this.oldUser.firstName;
    this.user.lastName=this.oldUser.lastName;
    this.user.age=this.oldUser.age;
    this.user.sex=this.oldUser.sex;
  }
  update(message: string, action: string){
    this.oldUser.firstName=this.user.firstName;
    this.oldUser.lastName=this.user.lastName;
    this.oldUser.age=this.oldUser.age;
    this.oldUser.sex=this.oldUser.sex;
    this.snackBar.open(message, action, {
      duration: 2000,
    });
    this.userView=true;
    this.userEditView=false;
  }
}
