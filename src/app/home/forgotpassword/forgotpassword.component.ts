import { Component, OnInit } from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
    public form:FormGroup;
    public email:AbstractControl;
    public otp:AbstractControl;

    isOtp:boolean = false;

  constructor(fb:FormBuilder) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'otp': ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });

    this.email = this.form.controls['email'];
    this.otp = this.form.controls['otp'];
   }
  public onSubmit(values:Object):void {
   if(!this.isOtp){
     console.log(values);
     this.isOtp = true;
   }else if(this.isOtp){
     console.log(values);
   }
  }
  ngOnInit() {
  }

}
