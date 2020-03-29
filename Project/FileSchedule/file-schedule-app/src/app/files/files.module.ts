import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilesRoutingModule } from './files-routing.module';
import { FilelistComponent } from './filelist/filelist.component';



@NgModule({
  declarations: [FilelistComponent],
  imports: [
    CommonModule,
    FilesRoutingModule,
  ]
})
export class FilesModule { }
