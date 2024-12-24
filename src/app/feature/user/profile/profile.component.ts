import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from 'src/app/shared/models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  currentUser:User

  private userSubs!: Subscription;

  constructor(private authService: AuthService,
              private userService: UserService
  ){}

  ngOnInit(): void {
      this.userSubs = this.authService.currentUser.subscribe((user) => {
        this.currentUser = user
      })
  }

  userImage(image:any){
    return this.userService.getProfileImage(image)
  }
}
