import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {News, PageInfo, Res} from "../models/model";
import { Page } from 'ngx-pagination';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<Res> {
    return this.http.get<Res>('https://crawler19.azurewebsites.net/v1/news');
  }

  getByKeywords(keywords: string): Observable<News[]> {
    return this.http.get<News[]>('https://crawler19.azurewebsites.net/v1/news/search/' + keywords);
  }

  getById(id: number): Observable<Res> {
    return this.http.get<Res>('https://crawler19.azurewebsites.net/v1/news/' + id);
  }


}
