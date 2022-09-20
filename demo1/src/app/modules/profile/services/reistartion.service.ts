import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
 import{environment } from './../../../../environments/environment.prod'
@Injectable({
  providedIn: 'root'
})
export class ReistartionService {

  constructor(private _httpclien:HttpClient, private router:Router) { }
  // dburl:"http://localhost:3228/api/v1/",
  // http://localhost:3228/api/v1/countryStateCity/countries

  register(data:any){
    return this._httpclien.post(environment.dburl + "authentication/register",data)
   }

 
 
   Getall_Country(){
     return this._httpclien.get(environment.dburl +"countryStateCity/countries")
   }
 
 
   state(country:any){
     return this._httpclien.get( environment.dburl +"countryStateCity/states/"+country )
   }
 
 
 
   city(countrycode:any,statecode:any){
     return this._httpclien.get(environment.dburl +"countryStateCity/cities/"+countrycode +statecode );
 
 
   }
 
}
