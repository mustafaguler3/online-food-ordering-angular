import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from '../user/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  isLoggedIn : boolean = false;
  currentUser: any
  isDropdownOpen = false;
  currentLangs:any

  private userSubscription!: Subscription;

  constructor(private authService: AuthService,
              private router: Router,
              public translate: TranslateService,
              private userService: UserService
  ){
    translate.addLangs(['en', 'tr']); // Kullanılabilir diller
    translate.setDefaultLang('en'); // Varsayılan dil
    this.currentLangs = this.translate.currentLang
  }

  ngOnInit(): void {
    this.userSubscription = this.authService.currentUser.subscribe((user) => {
      this.currentUser = user
    })
  }
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  changeLanguage(lang: string) {
    this.translate.use(lang); // Dili değiştirir
    this.isDropdownOpen = false; // Seçim sonrası dropdown'ı kapatır
  }
  

  logout(){
    this.authService.logout()
    this.router.navigateByUrl("login")
  }

  getUserImage(image:any){
    return this.userService.getProfileImage(image)
  }

  getCurrentLanguageFlag() {
    const currentLang = this.translate.currentLang;
    if (currentLang === 'en') return 'flag-icon-us';
    if (currentLang === 'tr') return 'flag-icon-tr';
    return 'flag-icon-us';
  }
}
