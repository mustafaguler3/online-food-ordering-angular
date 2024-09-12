import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { MyJwtPayload } from 'src/app/shared/models/jwt-payload';
import { JwtResponse } from 'src/app/shared/models/jwt-response';
import { User } from 'src/app/shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = "http://localhost:8080/api"

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    const storedUser = localStorage.getItem("currentUser");
    this.currentUserSubject = new BehaviorSubject<any>(storedUser ? JSON.parse(storedUser) : null);
    this.currentUser = this.currentUserSubject.asObservable();
  }


  getUserValue(){
    const currentUser = this.currentUserSubject.value
    return currentUser
  }

  getProfileImage(image:any){
    return "http://localhost:8080/api/uploads/users/"+image
  }

  login(user: User){
    return this.http.post<JwtResponse>(this.apiUrl + "/login",user)
    .pipe(map(response => {
      if(response.token){
        const decodedToken = jwtDecode<MyJwtPayload>(response.token)
        const firstName = decodedToken.firstName
        const lastName = decodedToken.lastName
        const profileImage = decodedToken.profileImage

        

        const currentUser = {
          firstName: firstName,
          lastName: lastName,
          profileImage: profileImage
        }

        localStorage.setItem("currentUser",JSON.stringify(currentUser))
        this.currentUserSubject.next(currentUser)

        console.log("currentUser in local" +localStorage.getItem("currentUser"))
      }
    }))
  }
  register(user:User,profileImage:any){
    const formData = new FormData();
    formData.append('user', new Blob([JSON.stringify(user)], { type: 'application/json' }));
    if (profileImage) {
      formData.append('profileImage', profileImage);
    }
    return this.http.post<any>(this.apiUrl + "/register",formData)
  }

  logout(){
    localStorage.removeItem("currentUser")
    this.currentUserSubject.next(null)
  }



}
