import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
=======
import { Observable } from 'rxjs';
import { FileData } from '../models/FileData';
>>>>>>> b80850ad93f776b2997788415a5bea2c3906aedc

@Injectable({
  providedIn: 'root'
})
export class FileService {
<<<<<<< HEAD
  BaseUrl="ApiPath"
  //Add file services here.

  constructor(private http: HttpClient) { }
  getFiles(){
    return this.http.get(this.BaseUrl);
=======
  BaseUrl="https://localhost:44351/api/";

  constructor(private http: HttpClient) { }

  getFiles(): Observable<FileData[]>{
    return this.http.get<FileData[]>(this.BaseUrl + "file");
  }

  generateReport(fileID: number): Observable<number>{
    return this.http.post<number>(this.BaseUrl + "message/" + fileID, "FileID");
>>>>>>> b80850ad93f776b2997788415a5bea2c3906aedc
  }
}
