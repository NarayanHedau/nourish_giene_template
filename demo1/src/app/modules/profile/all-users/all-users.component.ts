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

  selectvalue=[
    {value:5},
    {value:10}, {value:20}
  ]
  constructor(private _ser:UserService) {
   
   
   }
 userdata:any=[]
  ngOnInit(): void {
    this.getalluser()
  }


  value:number=5;
  getvalue(data:any){
    console.log("data bvalue", data)
 this.value=data
  }
  deleteUser(i:any){
    console.log(i)
    this._ser.deleteUser(i).subscribe((result)=>{
      
     console.log( this.getalluser());
      console.warn("result", result)
      this.ngOnInit()
    })

  }




getalluser(){
  return this._ser.getUserdata().subscribe((res:any)=>{
   
    this.userdata=res.data;
    console.log("data",this.userdata);
    
    },(err:any)=>{
      console.log(err)
    })
}

searchItem:string=""
// applyFilter(event:any) {
//   const filterValue = event.target.value;
//   console.log(filterValue)
//   this.userdata.filter = filterValue.trim().toLowerCase();
// }

applyFilter(data:any){
  const query= `?userName=`+ data.value
 
 
  console.log(data.value)
}


name(){
   this.userdata.sort((a:any, b:any) => a.name.localeCompare(b.name))
//   let name:any =[];
//  this.userdata.forEach((ele:any) => {
//   name.push(ele.name);
//  }); 
//  console.log(">>>>", name)
// console.log(name.sort())
// return name.sort()
}
}
