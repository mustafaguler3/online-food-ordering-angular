import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm: any


  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private toastService: ToastService,
              private route: Router
  ){}

  ngOnInit(): void {
      this.loginForm = this.fb.group({
        email: ["",[Validators.required]],
        password: ["",[Validators.required]]
      })
  }

  login(){
    this.authService.login(this.loginForm.value).subscribe({
      next: (response) => {
        console.log("Response -> "+response)
        this.toastService.showSuccess("Success","Login success fully")
        this.route.navigateByUrl("home")
      },
      error: (err)=> {
        console.log("Error : "+err)
        this.toastService.showError("Error","An error occurred during loging")
      }
    })
  }
}