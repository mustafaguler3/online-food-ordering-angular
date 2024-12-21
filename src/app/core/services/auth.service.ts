import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { MyJwtPayload } from 'src/app/shared/models/jwt-payload';
import { TokenDto } from 'src/app/shared/models/tokendto.model';
import { User } from 'src/app/shared/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = environment.apiUrl

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject(null);
    this.currentUser = this.currentUserSubject.asObservable()
  }


  getCurrentUser(){
    return this.currentUserSubject.value
  }

  setCurrentUser(user: any): void {
    this.currentUserSubject.next(user);
  }
  

  getProfileImage(image:any){
    return "http://localhost:8080/api/auth/uploads/users/"+image
  }

  login(user: User){
    return this.http.post<TokenDto>(this.apiUrl + "/auth/login",user)
  }

  register(user:User,profileImage:any){
    const formData = new FormData();
    formData.append('user', new Blob([JSON.stringify(user)], { type: 'application/json' }));
    if (profileImage) {
      formData.append('profileImage', profileImage);
    }
    return this.http.post<any>(this.apiUrl + "/auth/register",formData)
  }

  logout(){
    localStorage.removeItem("accessToken")
    this.currentUserSubject.next(null)
  }



}
