import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {EmailValidator, EqualPasswordsValidator} from '../../../theme/validators';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AppService} from "../../../app.service";

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.scss']
})

export class EmployeeRegisterComponent implements OnInit {
       user:UserDetails;

  constructor(private router:Router,
  private register:AppService,) {

  this.user = {
        ename: "" ,
        email: "" ,
        erole: "",
        etype:"",
        ctc: undefined,
        epayroll: "",
        designation:"",
        rmanager: "",
        mobile1: undefined,
        mobile2: undefined,
        dob: null,
        doj: null,
        address:"",
        image:"",
        jobstatus: false
  }
 }
 data:any;
  ngOnInit() {
  }


 fileChange($event) : void {
    this.readThis($event.target);
  }
  readThis(inputValue: any): void {
  var totalLength = inputValue.files;
  for(var i = 0; i < totalLength.length; i++) {
  var file:File = inputValue.files[i];

  var myReader:FileReader = new FileReader();
  myReader.onloadend = (e) => {
    this.user.image = myReader.result;
  }
  myReader.readAsDataURL(file);
  }
}

onRegisterSubmit(user){
      this.register.url="http://localhost:3000/employee/createemployee";
      this.register.data = user;

      this.register.postService().subscribe(res=>{
        console.log(res)
        alert("Successfully registered")
    });
}

}

class UserDetails {

        ename: String;
        email: String;
        erole: String;
        etype:String;
        ctc: Number;
        epayroll: String;
        designation:String;
        rmanager:String;
        mobile1: Number;
        mobile2: Number;
        dob: Date;
        doj: Date;
        address:String;
        image:String;
        jobstatus:Boolean;
}
