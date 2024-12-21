import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Product } from 'src/app/shared/models/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

  products():Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`)
    .pipe(catchError((error) => {
      console.log("Error fetching products: ", error);
      return throwError(() => new Error('Failed to fetch products'))
    }))
  }

  getProduct(id:number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`)
  }

  getProductsImage(image:string) {
    return `${this.apiUrl}/auth/uploads/products/${image}`
  }

}
