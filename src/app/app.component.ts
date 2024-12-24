import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './core/services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent implements OnInit{
  
  constructor(private translate: TranslateService,
              private authService: AuthService
  ){
    }

  ngOnInit(): void {
    const token = localStorage.getItem('accessToken');
    if (token) {
      const decodedUser = this.authService.decodeToken(token);
      this.authService.setCurrentUser(decodedUser);
    }
  }

  
}
