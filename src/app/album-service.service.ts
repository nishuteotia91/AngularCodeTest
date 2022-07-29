import { Injectable } from '@angular/core';
import { Albums } from './model/Albums';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumServiceService {

  constructor(public http: HttpClient) { }
  url = "https://jsonplaceholder.typicode.com/albums";
  
  getAlbums() {

    return this.http.get<Albums>(this.url);
  }
}
