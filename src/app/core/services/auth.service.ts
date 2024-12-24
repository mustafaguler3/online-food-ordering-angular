import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
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

    const token = localStorage.getItem("accessToken")
    const decodedUser = token ? this.decodeToken(token) : null
    this.currentUserSubject = new BehaviorSubject(decodedUser);
    this.currentUser = this.currentUserSubject.asObservable()
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('userToken');
  }

  login(user: User){
    return this.http.post<TokenDto>(this.apiUrl + "/auth/login",user).pipe(
      tap(response => console.log("Login Response:", response)))
  }

  decodeToken(token: string): any {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (error) {
      console.error('Token decoding failed:', error);
      return null;
    }
  }

  refreshToken(): Observable<string> {
    const refreshToken = localStorage.getItem("refreshToken");
    return this.http.post<{ accessToken: string }>(
      `${this.apiUrl}/auth/refresh-token`,
      { refreshToken }
    ).pipe(map(response => response.accessToken));
  }
  
  isTokenExpired(token: string): boolean {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.exp < Date.now() / 1000;
  }

  getCurrentUser(){
    return this.currentUserSubject.value
  }

  setCurrentUser(user: any): void {
    this.currentUserSubject.next(user);
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
    localStorage.removeItem("refreshToken")
    this.currentUserSubject.next(null)
  }
  


}
