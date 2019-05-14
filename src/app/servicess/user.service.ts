import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {
    
   }
   getPosts(){
     return this.http.get("https://jsonplaceholder.typicode.com/posts");
      
  }
  // registerSeller(){
  //   return this.http.post("localhost:3000/users/userRegistration";"";);
  // }


}
