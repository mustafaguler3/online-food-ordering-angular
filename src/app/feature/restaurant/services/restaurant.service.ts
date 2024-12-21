import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Restaurant } from 'src/app/shared/models/restaurant';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  apiUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

  getRestaurants() : Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${this.apiUrl}/restaurants`);
  }

  getProductsImage(image:string) {
    return `${this.apiUrl}/auth/uploads/products/${image}`
  }
}
