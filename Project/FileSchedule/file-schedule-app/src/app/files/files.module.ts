import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilesRoutingModule } from './files-routing.module';
import { FilelistComponent } from './filelist/filelist.component';
<<<<<<< HEAD

=======
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReportGenerateComponent } from './report-generate/report-generate.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
>>>>>>> b80850ad93f776b2997788415a5bea2c3906aedc


@NgModule({
  declarations: [FilelistComponent, ReportGenerateComponent],
  imports: [
    CommonModule,
    FilesRoutingModule,
<<<<<<< HEAD
=======
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    FormsModule
>>>>>>> b80850ad93f776b2997788415a5bea2c3906aedc
  ]
})
export class FilesModule { }
