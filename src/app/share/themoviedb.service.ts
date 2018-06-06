import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class MoviesService {
  url: string = 'https://api.themoviedb.org/3/tv/';
  apiKey: string = '?api_key=fe6dc5916f0f7ca20dffe7dbe9ad6cd5';
  constructor(private  http: HttpClient) { }

  getDonnees(): Observable<any> {
    const urlPopular = this.url + 'popular' + this.apiKey;
    return this.http.get(urlPopular, {responseType: 'json'});
  }

  getMovie(id: number) : Observable<any> {
    const urlById = this.url + id + this.apiKey;
    return this.http.get(urlById, {responseType: 'json'});
  }
}
