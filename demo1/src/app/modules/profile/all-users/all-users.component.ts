import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {
  p: number = 1;
  constructor(private _ser:UserService) { }
 userdata:any=[]
  ngOnInit(): void {

    this._ser.getUserdata().subscribe((res:any)=>{
   
    this.userdata=res.data;
    console.log("data",this.userdata);
    
    },(err:any)=>{
      console.log(err)
    })
  }


  value:any
  getvalue(data:any){
    console.log("data bvalue", data.value)
 this.value=data.value
  }

}
