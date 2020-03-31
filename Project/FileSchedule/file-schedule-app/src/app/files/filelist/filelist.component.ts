import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { FileData } from 'src/app/models/FileData';
import { FileService } from 'src/app/services/file.service';
<<<<<<< HEAD
=======
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ReportGenerateComponent } from '../report-generate/report-generate.component';
>>>>>>> b80850ad93f776b2997788415a5bea2c3906aedc

@Component({
  selector: 'app-filelist',
  templateUrl: './filelist.component.html',
  styleUrls: ['./filelist.component.css']
})
export class FilelistComponent implements OnInit {
<<<<<<< HEAD

  displayedColumns: string[] = ['FileName', 'FilePath', 'Category', 'Shedule'];
=======
  displayedColumns: string[] = ['fileName', 'filePath', 'category', 'schedule'];
>>>>>>> b80850ad93f776b2997788415a5bea2c3906aedc
  files: FileData[] = [];
  dataSource: MatTableDataSource<FileData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

<<<<<<< HEAD
  constructor(private service: FileService) {
    // Call the get all method here to get the data and bind it.
    this.service.getFiles().subscribe((res: any[]) => {
      // console.log(res);
      this.files = res;
      this.dataSource = new MatTableDataSource(this.files);
    });
    this.dataSource = new MatTableDataSource(this.files);
    const File_Data: FileData[] = [
      {FileID: 1, FileName: 'bomb', FilePath: 'c/..', Category: 'Account'}
    ];
    this.dataSource = new MatTableDataSource(File_Data);
   }
=======
  constructor(private fileService: FileService, public dialog: MatDialog) {
    this.fileService.getFiles().subscribe((res: any[]) => {
      this.files = res;
      this.dataSource = new MatTableDataSource(this.files);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
>>>>>>> b80850ad93f776b2997788415a5bea2c3906aedc

  ngOnInit(): void {
    
  }
// filter Table Raw method
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openModal(rowObject: FileData){
    // console.log(rowObject.fileID);
    const dialogRef = this.dialog.open(ReportGenerateComponent, {
      width: '400px',
      height: '350px',
      data: {fileID: rowObject.fileID, fileName: rowObject.fileName, filePath: rowObject.filePath, category: rowObject.category}
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  }

}
