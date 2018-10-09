import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public products = [];
  public errorMsg;
  
  constructor(private _productService: ProductsService) {}

  ngOnInit() {
      this._productService.getProducts()
      .subscribe(data => this.products = data,
                  error => this.errorMsg = error)
      
  }
}
