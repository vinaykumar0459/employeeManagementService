import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgaModule } from '../theme/nga.module';

import { DashboardComponent } from './dashboard.component';
import { TimesheetComponent } from './timesheet/timesheet.component';

import { CalendarService } from './timesheet/calendar.service';

@NgModule({
  imports: [
    CommonModule,
    NgaModule,
  
    DashboardRoutingModule
  ],
  declarations: [DashboardComponent, TimesheetComponent],
  providers: [CalendarService]
})
export class DashboardModule { }
