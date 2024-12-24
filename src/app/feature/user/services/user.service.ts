import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, Subscription, throwError } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { Address } from 'src/app/shared/models/address.model';
import { User } from 'src/app/shared/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl= environment.apiUrl;

  constructor(private http: HttpClient){}

  getProfileImage(image:any){
    return `${this.apiUrl}/auth/uploads/users/`+image
  }

  

}
