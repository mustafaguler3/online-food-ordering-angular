import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from 'src/app/shared/models/user';

@Component({
    selector: 'app-change-profile',
    templateUrl: './change-profile.component.html',
    styleUrls: ['./change-profile.component.css'],
    standalone: false
})
export class ChangeProfileComponent implements OnInit{

  currentUser: User
  constructor(private authService: AuthService){}

  private userSubs: Subscription

  ngOnInit(): void {
      this.userSubs = this.authService.currentUser.subscribe(user => {
        this.currentUser = user
      })
  }

}
