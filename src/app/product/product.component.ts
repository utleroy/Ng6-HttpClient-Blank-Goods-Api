import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Category } from '../products';
import { catchError, map, tap } from 'rxjs/operators';
import { DataService } from '../data.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  readonly ROOT_URL = "https://api.scalablepress.com/v2";

  categories$: Object;

  constructor(private data: DataService) { }

  ngOnInit() { 
    
      this.data.getProducts().subscribe(
        data => console.log(this.categories$ = data)

      )
    

  }
}

