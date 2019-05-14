import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
public products:any=[ {productId:"1",productType:"food",producSubType:"role",productName:"snacks",productImage:"./assets/snacksburger.jpg"},
{productId:"2",productType:"food",producSubType:"electronic",productName:"beriyani",productImage:"./assets/beriyani.jpg"},
,
];


  constructor() {
  //   this.products=[
  //     {productId:"1",productType:"food",producSubType:"electronic",productName:"snacks",productImage:("")},
  //     {productId:"2",productType:"food",producSubType:"electronic",productName:"beriyani",productImage:"./assets/beriyani.jpg"}
  // ];
   }

  ngOnInit() {
  }

}
