import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from './model/Users';



@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }
  url = "https://jsonplaceholder.typicode.com/users";
  
  getUsers() {

   return this.http.get<Users>(this.url);
  }
}
