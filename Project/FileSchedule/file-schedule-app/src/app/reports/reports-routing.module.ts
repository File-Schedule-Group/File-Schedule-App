import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportlistComponent } from './reportlist/reportlist.component';
import { ReportGenerateComponent } from './report-generate/report-generate.component';

const routes: Routes = [
  { path: 'reportlist', component: ReportlistComponent },
  { path: 'reportGenerate', component: ReportGenerateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
