import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

 readonly ROOT_URL = 'http://localhost:3000';

 products: any;
  
constructor(private  http:  HttpClient) { }
  getProducts() {
    this.products = this.http.get(this.ROOT_URL + "/products")
  }
  
}
