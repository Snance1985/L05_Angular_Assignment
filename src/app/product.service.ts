import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  dataSource = 'assets/products.json';
  catDataSource = 'https://catfact.ninja/fact';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<Product[]>(this.dataSource);
  }

  getCatFact() {
    return this.http.get(this.catDataSource);
  }
}