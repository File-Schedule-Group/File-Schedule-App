import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilelistComponent } from './filelist/filelist.component';
import { ReportGenerateComponent } from './report-generate/report-generate.component';

const routes: Routes = [
  { path: 'filelist', component: FilelistComponent },
  { path: 'reportGenerate', component: ReportGenerateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilesRoutingModule { }
