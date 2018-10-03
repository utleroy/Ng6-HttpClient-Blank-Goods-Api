import { Component, OnInit } from '@angular/core';
import { Product } from '../products.model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product;

  constructor() { 
    this.product = new Product('sjdhfalsd', 'Gildan', '5000b', 'image/url.jpg', 3);
    console.log(this.product);
  }


ngOnInit() {
}

}
