import { Component, OnInit ,ViewChild} from '@angular/core';




@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})

export class OrdersComponent implements OnInit {

  // public orders=[{orderNumber:"1",orderBy:"mahesh",orderDate:"02/05/2019",item:"beriyani"},
  // {orderNumber:"2",orderBy:"nanda",orderDate:"02/05/2019",item:"piza"},
  // {orderNumber:"3",orderBy:"nandakumar",orderDate:"02/05/2019",item:"chicken"}]
 
  constructor() { }

  ngOnInit() {
 
  }

}
