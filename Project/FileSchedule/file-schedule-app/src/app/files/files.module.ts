import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilesRoutingModule } from './files-routing.module';
import { FilelistComponent } from './filelist/filelist.component';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
// import {MatFormField} from '@angular/material/form-field';

=======
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
>>>>>>> 990d5e926a75df6541b224fc2df5eb08e51637fe


@NgModule({
  declarations: [FilelistComponent],
  imports: [
    CommonModule,
    FilesRoutingModule,
<<<<<<< HEAD
    FormsModule
=======
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
>>>>>>> 990d5e926a75df6541b224fc2df5eb08e51637fe
  ]
})
export class FilesModule { }
