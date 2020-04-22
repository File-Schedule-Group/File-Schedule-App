import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportlistComponent } from './reportlist/reportlist.component';

const routes: Routes = [{ 
  path: 'reportlist', 
  component: ReportlistComponent 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
