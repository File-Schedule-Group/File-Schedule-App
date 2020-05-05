import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilelistComponent } from './filelist/filelist.component';

const routes: Routes = [
  { path: 'filelist', component: FilelistComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilesRoutingModule { }
