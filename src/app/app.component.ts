import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'foodfest';
  divName:any;
  ngOnInit(){
    this.divName=true;
  }
}
