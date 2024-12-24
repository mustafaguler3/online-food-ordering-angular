import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
    standalone: false
})
export class RegisterComponent implements OnInit{

  registerForm:any
  uploadedFile: File | undefined

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private toastService: ToastService,
              private route: Router
  ){}

  ngOnInit(): void {
      this.registerForm = this.fb.group({
        firstName: ["",[Validators.required]],
        lastName: ["",[Validators.required]],
        email: ["",[Validators.required]],
        password: ["",[Validators.required]],
        profileImage: ["",[Validators.required]],
        phoneNumber: ["",[Validators.required]],
        username: ["",[Validators.required]]
      })
  }

  selectFile(event:any){
    this.uploadedFile = event.target.files[0]
  }

  register(){
    this.authService.register(this.registerForm.value,this.uploadedFile).subscribe({
      next:(res)=> {
        console.log("Response -> "+res)
        this.toastService.showSuccess("Success","Register successfully, Verification code has been sent to your email address.")
        this.route.navigateByUrl("login")
      },
      error: (error)=> {
        console.log(JSON.stringify(error))
        this.toastService.showError("Error","An error occurred during register ")
      }
    })
  }
}
