import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileData } from '../models/FileData';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  BaseUrl="https://localhost:44351/api/";

  constructor(private http: HttpClient) { }

  getFiles(): Observable<FileData[]>{
    return this.http.get<FileData[]>(this.BaseUrl + "file");
  }

  generateReport(file: FileData): Observable<FileData>{
    return this.http.post<FileData>(this.BaseUrl + "message", file);
  }
}
