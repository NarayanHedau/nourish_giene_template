import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  {environment}  from '../../../../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }




  getUserdata(){
   // console.log("data", this.http.get(this.dburl).subscribe(res=>console.log(res)))   
    return this.http.get(environment.dburl)
  }
}
