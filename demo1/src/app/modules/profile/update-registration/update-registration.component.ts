import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormControlName, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { ReistartionService } from '../services/reistartion.service';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-update-registration',
  templateUrl: './update-registration.component.html',
  styleUrls: ['./update-registration.component.scss']
})
export class UpdateRegistrationComponent implements OnInit {
  maxlength=12;

param:any
  countries: any = [];
  addProduct: FormGroup = new FormGroup({});
  statee = new FormControl('');
  countryy = new FormControl('');
  constructor(private _fb:FormBuilder,private ser:ReistartionService, private _rout:Router, private activated:ActivatedRoute ,private user:UserService) { }

  updateRegForm:FormGroup=new FormGroup({})
  ngOnInit(): void {
    this.updateRegForm=this._fb.group({

      name:new FormControl("",[Validators.required]),
      email:new FormControl("",[Validators.required, Validators.email]),
      phoneNumber: new FormControl("",[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      password: new FormControl("",[Validators.required]),
      CountryOfOrigin: new FormControl('', []),
      state: new FormControl('', []),
      city: new FormControl('', []),
    })

    this.getCountry();


     this.param= this.activated.snapshot.paramMap.get('id')
  console.log(this.param)

  this.user.getByUser(this.param).pipe(map((data:any)=> data.data)).subscribe(res=>{
    console.log("data",res);
this.updateRegForm.patchValue(res)
  })
  }

  submitted=false



//   getByupdate(){
// this.user.updateUser(this.param).subscribe(res=>{
//   console.log(res)
// })
//   }


  massage=""
  
save(){
 // console.log(this.updateRegForm.value)
 this.submitted=true;
 if(this.updateRegForm.invalid){
  return
 }
this.ser.register(this.updateRegForm.value).subscribe((res:any)=>{
  console.log(res);
  this.massage=" Successfull";
  
localStorage.setItem("login", res )
  if(res){
    this._rout.navigate(["index"])  
   }
},error=>{
  console.log(error);
  this.massage=error.message
}
)
}

  getCountry() {
    this.ser
      .Getall_Country()
      .pipe(map((res: any) => res.data))
      .subscribe((res) => {
        this.countries = res;
  
      
      });
  }
  
  
  
  
  countryCode: any;
  state: any;
  st: any;
  getState(event: any) {
    this.st = this.countries.filter(
      (e: any) => e.isoCode === event.target.value
    );
    setTimeout(() => {
      this.addProduct
        .get('CountryOfOrigin')
        ?.patchValue(this.st[0].name);
  
      this.countryCode = country;
  
      this.ser
        .state(this.st[0].isoCode)
        .pipe(map((data: any) => data.data))
        .subscribe((res: any) => {
          this.state = res;
        });
    }, 500);
  
    const country = JSON.stringify(this.countryy.value);
  }
  
  
  
  
  
  stateCode: any;
  city: any;
  getcity(event: any) {
    this.countryCode = this.st[0].isoCode;
    const cCode = this.countryCode + '/';
    const scode = this.state.filter(
      (e: any) => e.isoCode === event.target.value
    );
  
    setTimeout(() => {
      console.log('st_ate', st_ate);
  
      this.stateCode = scode[0].name;
      this.addProduct.get('state')
        ?.patchValue(this.stateCode);
  
      this.ser
        .city(cCode, scode[0].isoCode)
        .pipe(map((result: any) => result.data))
        .subscribe((res: any) => {
          this.city = res;
        });
    }, 700);
  
    const st_ate = JSON.stringify(this.statee.value);
  }
  
  
}
