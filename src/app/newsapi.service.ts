import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private http : HttpClient) { }
  getarticles(searchKey){
    return this.http.get<any>(`https://newsapi.org/v2/everything?q=${searchKey}&from=2021-12-17&to=2021-12-17&sortBy=popularity&apiKey=9fe715c5962d472ebf20633272ccd752`)
  }
}
