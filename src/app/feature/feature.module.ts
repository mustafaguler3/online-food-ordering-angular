import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FooderComponent } from './fooder/fooder.component';
import { HomeComponent } from './home/home.component'
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { UserDashboardComponent } from './auth/user-dashboard/user-dashboard.component';
import { BreadcrumbComponent, BreadcrumbItemDirective } from 'xng-breadcrumb';
import { BreadcrumComponent } from "./breadcrumb/breadcrum.component";
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { RestaurantListComponent } from './restaurant/restaurant-list/restaurant-list.component'

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    HeaderComponent,
    FooderComponent,
    HomeComponent,
    BreadcrumComponent,
    UserDashboardComponent,
    ProductListComponent,
    ProductDetailComponent,
    RestaurantListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BreadcrumbComponent,
    BreadcrumbItemDirective
    
  ],
  providers:[MessageService],
  exports: [NavbarComponent,HeaderComponent,FooderComponent,BreadcrumComponent]
})
export class FeatureModule { }
