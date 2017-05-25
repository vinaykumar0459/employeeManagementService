import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-timesheetdata',
  templateUrl: './timesheetdata.component.html',
  styleUrls: ['./timesheetdata.component.scss']
})
export class TimesheetdataComponent implements OnInit {
  public form:FormGroup;
   public day:AbstractControl;
  public time:AbstractControl;
  public desc:AbstractControl;
  public submitted:boolean = false;

  constructor(fb:FormBuilder,private activeModal: NgbActiveModal) {
    this.form = fb.group({
      'day': ['',Validators.compose([Validators.required])],
      'time': ['', Validators.compose([Validators.required])],
      'desc': ['', Validators.compose([Validators.required])]
    });
    this.day = this.form.controls['day'];
    this.time = this.form.controls['time'];
    this.desc = this.form.controls['desc'];
  }

  public onSubmit(values:Object):void {
   console.log(values);
  }
  ngOnInit() {
  }
 closeModal() {
    this.activeModal.close();
  }
  tsSubmit(data){
    console.log(data);
  }
}
