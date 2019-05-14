import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,Validators} from '@angular/forms';
import { FormsModule,ReactiveFormsModule,} from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public createProduct=false;
  public viewProduct=true;


  public products:any=[ {productId:"1",productType:"food",producSubType:"role",productName:"snacks",productImage:"./assets/snacksburger.jpg"},
{productId:"2",productType:"food",producSubType:"electronic",productName:"beriyani",productImage:"./assets/piza.jpg"},

{productId:"1",productType:"food",producSubType:"role",productName:"snacks",productImage:"./assets/snacksburger.jpg"},
{productId:"1",productType:"food",producSubType:"role",productName:"snacks",productImage:"./assets/piza.jpg"},
{productId:"1",productType:"food",producSubType:"role",productName:"snacks",productImage:"./assets/roti.jpg"},
{productId:"1",productType:"food",producSubType:"role",productName:"snacks",productImage:"./assets/role.jpg"},
{productId:"1",productType:"food",producSubType:"role",productName:"snacks",productImage:"./assets/thali.jpg"},
{productId:"1",productType:"food",producSubType:"role",productName:"snacks",productImage:"./assets/role.jpg"},
{productId:"1",productType:"food",producSubType:"role",productName:"snacks",productImage:"./assets/thali.jpg"},
{productId:"1",productType:"food",producSubType:"role",productName:"snacks",productImage:"./assets/thali.jpg"},
{productId:"1",productType:"food",producSubType:"role",productName:"snacks",productImage:"./assets/role.jpg"},
{productId:"1",productType:"food",producSubType:"role",productName:"snacks",productImage:"./assets/thali.jpg"}


];
  constructor() { }

  ngOnInit() {
  }
 addProduct(){
   this.createProduct=true;
   this.viewProduct=false;

 }
 createCancel(){
   this.viewProduct=true;
   this.createProduct=false;

 }
}
