import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './feature/auth/login/login.component';
import { RegisterComponent } from './feature/auth/register/register.component';
import { HomeComponent } from './feature/home/home.component';
import { ProfileComponent } from './feature/user/profile/profile.component';
import { ChangeProfileComponent } from './feature/user/change-profile/change-profile.component';
import { SavedAddressComponent } from './feature/user/saved-address/saved-address.component';
import { CartComponent } from './feature/cart/cart.component';
import { AddressFormComponent } from './feature/address/address-form/address-form.component';
import { PaymentFormComponent } from './feature/payment/payment-form/payment-form.component';

const routes: Routes = [
  {path:"login",component:LoginComponent,data: {breadcrumb: 'Login'}},
  {path:"register",component:RegisterComponent,data: {breadcrumb: 'Register'}},
  {path:"home",component:HomeComponent,data: {breadcrumb: 'Home'}},
  {path:"cart",component: CartComponent},
  {path:"address",component: AddressFormComponent},
  {path:"payment",component: PaymentFormComponent},
  {path:"profile",component: ProfileComponent,
    children:
    [
      { path: "", redirectTo: "change-profile", pathMatch: "full" },//varsayılan olarak açılckak
      { path: "change-profile", component: ChangeProfileComponent },
      { path: "saved-address", component: SavedAddressComponent }
    ]},
  {path:"**",redirectTo:"home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
