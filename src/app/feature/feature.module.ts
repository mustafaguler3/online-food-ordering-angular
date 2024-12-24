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
import { BreadcrumbComponent, BreadcrumbItemDirective } from 'xng-breadcrumb';
import { BreadcrumComponent } from "./breadcrumb/breadcrum.component";
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { RestaurantListComponent } from './restaurant/restaurant-list/restaurant-list.component';
import { ProfileComponent } from './user/profile/profile.component'
import { HttpLoaderFactory } from '../app.module';
import { ChangeProfileComponent } from './user/change-profile/change-profile.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { SavedAddressComponent } from './user/saved-address/saved-address.component';
import { CartComponent } from './cart/cart.component';
import { OrderProcessComponent } from './cart/order-process/order-process.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { AddressFormComponent } from './address/address-form/address-form.component';
import { PaymentFormComponent } from './payment/payment-form/payment-form.component';
import { Dialog } from 'primeng/dialog';
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    HeaderComponent,
    FooderComponent,
    HomeComponent,
    BreadcrumComponent,
    ProfileComponent,
    ProductListComponent,
    ProductDetailComponent,
    RestaurantListComponent,
    ChangeProfileComponent,
    SavedAddressComponent,
    CartComponent,
    OrderProcessComponent,
    CartItemComponent,
    AddressFormComponent,
    PaymentFormComponent
  ],
  imports: [
    FeatureRoutingModule,
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
  exports: [
    NavbarComponent,
    HeaderComponent,
    FooderComponent,
    BreadcrumComponent]
})
export class FeatureModule { }
