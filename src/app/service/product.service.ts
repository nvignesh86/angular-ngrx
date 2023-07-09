import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(productName: string, counter: number){
    console.log("productName--->", productName, " Counter-->", counter);
    return this.http.get("https://dummyjson.com/products");
  }
}
