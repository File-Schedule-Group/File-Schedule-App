import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileData } from '../models/FileData';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  BaseUrl = 'https://localhost:44351/api/';

  constructor(private http: HttpClient) { }

  getFiles(): Observable<FileData[]> {
    return this.http.get<FileData[]>(this.BaseUrl + 'file');
  }

<<<<<<< HEAD
  generateReport(fileID: number): Observable<number> {
    return this.http.post<number>(this.BaseUrl + 'message/' + fileID, 'FileID');
=======
  generateReport(file: FileData): Observable<FileData>{
    return this.http.post<FileData>(this.BaseUrl + "message", file);
>>>>>>> 94c059a81ea056e2d0dc6e875ff8b17b20d4e80e
  }
}
