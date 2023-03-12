import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseURL = 'http://localhost:3005/products';
  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.baseURL);
  }

  getProductById(productId: number): Observable<IProduct>{
    return this.http.get<IProduct>(`${this.baseURL}/${productId}`);
  }

  addProduct(product:any){
    return this.http.post(this.baseURL, product);
  }

  editProduct(productId: number, product:any){
    return this.http.put(`${this.baseURL}/${productId}`, product);
  }

  deleteProduct(productId: number){
    return this.http.delete(`${this.baseURL}/${productId}`);
  }

}
