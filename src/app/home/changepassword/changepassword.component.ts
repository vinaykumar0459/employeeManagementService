import { Component, OnInit } from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {

  public form:FormGroup;
  public currentpassword:AbstractControl;
  public newpassword:AbstractControl;
  public confirmpassword:AbstractControl;
  public submitted:boolean = false;
  isCorrect:Boolean = false;
  constructor(fb:FormBuilder) {
    this.form = fb.group({
      'currentpassword': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'newpassword': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'confirmpassword': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.currentpassword = this.form.controls['currentpassword'];
    this.newpassword = this.form.controls['newpassword'];
     this.confirmpassword = this.form.controls['confirmpassword'];
  }
// if(!this.isCorrect){

// }
  public onSubmit(values:Object):void {
    if(!this.isCorrect){
        console.log(values);
        this.isCorrect = true;
    }else if(this.isCorrect){
        console.log(values);
       
    }
    // console.log(values);
    // this.submitted = true;
    // if (this.form.valid) {
    //   // your code goes here
    //    console.log(values);
    // }
  }

  ngOnInit() {
  }

}
