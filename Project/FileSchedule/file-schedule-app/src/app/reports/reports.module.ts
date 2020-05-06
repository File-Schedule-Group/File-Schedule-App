import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportlistComponent } from './reportlist/reportlist.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ReportGenerateComponent } from './report-generate/report-generate.component';


@NgModule({
  declarations: [ReportlistComponent, ReportGenerateComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule
  ]
})
export class ReportsModule { }
