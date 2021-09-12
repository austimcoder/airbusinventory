import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  

  apiUrl: string = 'http://localhost:8090/productInventory';
  headers = new HttpHeaders().set('Content-Type', 'application/json');


  constructor(private httpClient: HttpClient) { }

  // Show lists of item
  list(): Promise<Product[]> {
    return this.httpClient.get<Product[]>(`${this.apiUrl}/products`).pipe(
      catchError(this.handleError)
    ).toPromise();
  }

  create(product: Product): Promise<any> {
    return this.httpClient.post<Product>(`${this.apiUrl}/product`, product).pipe(
      catchError(this.handleError)
    ).toPromise();
  }

  // Edit/ Update 
  update(product: Product): Promise<any> {
    return this.httpClient.put<Product>(`${this.apiUrl}/product`, product).pipe(
      catchError(this.handleError)
    ).toPromise();
  }

  // Search By Category
  searchByCategory(category: string): Promise<Product[]> {
    return this.httpClient.get<Product[]>(`${this.apiUrl}/productsBy/category?val=${category}`).pipe(
      catchError(this.handleError)
    ).toPromise();
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    alert("Some error occured while serving you request!!");
    return throwError(
      'Something bad happened; please try again later.');
  };

}
