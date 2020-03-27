<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { files } from 'src/app/Models/file.model';
=======
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { FileData } from 'src/app/models/FileData';
>>>>>>> 990d5e926a75df6541b224fc2df5eb08e51637fe

@Component({
  selector: 'app-filelist',
  templateUrl: './filelist.component.html',
  styleUrls: ['./filelist.component.css']
})
export class FilelistComponent implements OnInit {
<<<<<<< HEAD
files: files[] = [];
Name: string;
dataSource: File;
  constructor() { }

  ngOnInit(): void {
    this.files = [{
      fileID: 1,
      fileName: 'FileONe',
      filePath: 'c:/files',
      catagory: 'Financial',
  },
  {
    fileID: 2,
    fileName: 'TwoFile',
    filePath: 'c:/files/filelist',
    catagory: 'Accounts',
}];
  }
  Search() {
    this.files = this.files.filter(res => {
      return res.fileName.toLocaleLowerCase().match(this.Name.toLocaleLowerCase());
    });
  }

  OpenFolder() {

  }
  onEdit() {

=======
  displayedColumns: string[] = ['FileName', 'FilePath', 'Category'];
  files: FileData[] = [];
  dataSource: MatTableDataSource<FileData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() {
    //Call the get all method here to get the data and bind it.
    this.dataSource = new MatTableDataSource(this.files);
   }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
>>>>>>> 990d5e926a75df6541b224fc2df5eb08e51637fe
  }
  onDelete() {

  }
}
