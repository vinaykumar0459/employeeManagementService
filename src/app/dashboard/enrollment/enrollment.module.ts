import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { EnrollmentRoutingModule } from './enrollment-routing.module';
import { NgaModule } from '../../theme/nga.module';
import {AppService} from "../../app.service";

import { EnrollmentComponent } from './enrollment.component';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgaModule,
    EnrollmentRoutingModule
  ],
  declarations: [EnrollmentComponent, EmployeeRegisterComponent],
  providers:[AppService]
})
export class EnrollmentModule { }
