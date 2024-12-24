import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Address } from 'src/app/shared/models/address.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getSavedAddress() : Observable<Address[]> {
    return this.http.get<Address[]>(`${this.apiUrl}/user/account/saved-address`)
    .pipe(catchError((error) => {
      console.error("Error fetching saved address ",error)
      return throwError(() => new Error("Failed to fetch saved addresss. Please try again later."))
    }))
  }
}
