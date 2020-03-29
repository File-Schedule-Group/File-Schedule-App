import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  BaseUrl="ApiPath"
  //Add file services here.

  constructor(private http: HttpClient) { }
  getFiles(){
    return this.http.get(this.BaseUrl);
  }
}
