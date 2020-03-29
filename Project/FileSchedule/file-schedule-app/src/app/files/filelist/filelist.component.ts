import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { FileData } from 'src/app/models/FileData';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-filelist',
  templateUrl: './filelist.component.html',
  styleUrls: ['./filelist.component.css']
})
export class FilelistComponent implements OnInit {

  displayedColumns: string[] = ['FileName', 'FilePath', 'Category', 'Shedule'];
  files: FileData[] = [];
  dataSource: MatTableDataSource<FileData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

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

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
// filter Table Raw method
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
