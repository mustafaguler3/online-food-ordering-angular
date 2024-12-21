import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './feature/auth/login/login.component';
import { RegisterComponent } from './feature/auth/register/register.component';
import { HomeComponent } from './feature/home/home.component';
import { UserDashboardComponent } from './feature/auth/user-dashboard/user-dashboard.component';
import { ProductDetailComponent } from './feature/products/product-detail/product-detail.component';

const routes: Routes = [
  {path:"login",component:LoginComponent,data: {breadcrumb: 'Login'}},
  {path:"register",component:RegisterComponent,data: {breadcrumb: 'Register'}},
  {path:"home",component:HomeComponent,data: {breadcrumb: 'Home'}},
  {path:"profile",component:UserDashboardComponent,data: {breadcrumb: 'Profile'}},
  {path:"products/:id",component:ProductDetailComponent},
  {path:"**",redirectTo:"home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
