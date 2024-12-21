import { Component, OnInit } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit{
  currentUser:User

  private userSubs!: Subscription;

  constructor(private authService: AuthService){}

  ngOnInit(): void {
      this.userSubs = this.authService.currentUser.subscribe((user) => {
        this.currentUser = user
      })
  }

  userImage(image:any){
    return this.authService.getProfileImage(image)
  }
}
