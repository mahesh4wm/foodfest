import { Component, OnInit } from '@angular/core';
import {UserService} from '../servicess/user.service'

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  addAmount=false;
  viewWallet=true;
actualPosts:any;

  constructor(private postsApi:UserService) { 
    this.postsApi. getPosts().subscribe(data => this.actualPosts=data)

  }

  ngOnInit() {
  }
addMoney(){
  this.viewWallet=false;
  this.addAmount=true;

}
CancelAddMoney(){
  this.viewWallet=true;
  this.addAmount=false;
}
}
