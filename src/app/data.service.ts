import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  readonly ROOT_URL = "https://api.scalablepress.com/v2";

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(this.ROOT_URL + '/categories') 
 }
}
