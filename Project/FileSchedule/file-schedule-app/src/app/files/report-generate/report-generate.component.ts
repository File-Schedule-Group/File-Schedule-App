import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FileData } from 'src/app/models/FileData';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-report-generate',
  templateUrl: './report-generate.component.html',
  styleUrls: ['./report-generate.component.css']
})
export class ReportGenerateComponent implements OnInit {
  fileID: number;
  fileName: string;
  category: string;

  constructor(public dialogRef: MatDialogRef<ReportGenerateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FileData, private fileService: FileService) { 
    }

  ngOnInit(): void {
    this.fileID = this.data.fileID;
    this.fileName = this.data.fileName;
    this.category = this.data.category;
  }

  onGenerate(fileId: number){
    this.fileService.generateReport(fileId).subscribe(res => console.log("Passed", res));
  }

  onClose(){
    this.dialogRef.close();
  }

}
