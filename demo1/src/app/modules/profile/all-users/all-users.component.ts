import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {

  constructor(private _ser:UserService) { }
 userdata:any[]
  ngOnInit(): void {

    this._ser.getUserdata().subscribe((res:any)=>{
    console.log("data",res)
    },(err:any)=>{
      console.log(err)
    })
  }

}
