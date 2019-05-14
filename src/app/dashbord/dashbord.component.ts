import { Component, OnInit } from '@angular/core';
import { elementStart } from '@angular/core/src/render3/instructions';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import { FormsModule,ReactiveFormsModule,} from '@angular/forms';
@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  isMenuOpen:boolean;

  
  ontoolbarToggel(){
    console.log("yes toggled" ,this.isMenuOpen)
    // this.isMenuOpen=true;
    if(this.isMenuOpen == false){
       this.isMenuOpen=true;
       console.log(this.isMenuOpen);
     }
    else{
      this.isMenuOpen=false;
    }
  }
  constructor(private router:Router ,private route: ActivatedRoute) { }
  
  logOut(){

    console.log("testlogout");
    
    this.router.navigate(['/sellerLogin']);

  }
  orders(){
    this.router.navigate(['/sellerLogin']);
  }

  ngOnInit() {
    // this.isMenuOpen=true;
  }

}
