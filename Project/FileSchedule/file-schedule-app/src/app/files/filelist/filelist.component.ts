import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { FileData } from 'src/app/models/FileData';
import { FileService } from 'src/app/services/file.service';
import {MatDialog} from '@angular/material/dialog';
import { ReportGenerateComponent } from '../../reports/report-generate/report-generate.component';

@Component({
  selector: 'app-filelist',
  templateUrl: './filelist.component.html',
  styleUrls: ['./filelist.component.css']
})
export class FilelistComponent implements OnInit {
  displayedColumns: string[] = ['fileName', 'filePath', 'category', 'schedule'];
  files: FileData[] = [];
  dataSource: MatTableDataSource<FileData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private fileService: FileService, public dialog: MatDialog) {
    this.fileService.getFiles().subscribe((res: any[]) => {
      this.files = res;
      this.dataSource = new MatTableDataSource(this.files);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngOnInit(): void {
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openModal(rowObject: FileData){
    const dialogRef = this.dialog.open(ReportGenerateComponent, {
      width: '350px',
      height: '350px',
      disableClose: true,
      data: {fileID: rowObject.fileID, fileName: rowObject.fileName, filePath: rowObject.filePath, category: rowObject.category}
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  }

}
