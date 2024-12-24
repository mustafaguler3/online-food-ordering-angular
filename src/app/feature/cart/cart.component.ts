import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from 'src/app/shared/models/user';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
    standalone: false
})
export class CartComponent {
  isLoggedIn: boolean = false;
  currentUser: User;
  currentStep: 'account' | 'address' | 'payment' | 'confirm' = 'account';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.authService.currentUser.subscribe((user) => {
      this.currentUser = user;
    });
    // Kullanıcı giriş yapmışsa adres adımı, aksi halde hesap adımı aktif
    this.currentStep = localStorage.getItem('accessToken')
      ? 'address'
      : 'account';
  }
}
