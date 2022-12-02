import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/service/auth-service.service';
import { TokenStorageService } from 'src/app/service/token-storage-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  username=''
  form : FormGroup;
  submitted = false;
  data : any;
  token : any;

  constructor(private authService: AuthentificationService, private tokenStorage: TokenStorageService,private fb:FormBuilder) { }

    loginForm(){
      this.form = this.fb.group({
        email : ['', [Validators.required, Validators.email]],
        password : ['', [Validators.required]]
      })
    }

  ngOnInit(): void {
    this.loginForm();
  }

  get f(){
    return this.form.controls;
  }

  submit(){  
    this.authService.login(this.form.value).subscribe(
      data => {
       
        
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        console.log('user >>>>',this.tokenStorage.getUser().nom);
        this.username=data.nom
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        // if (this.isLoggedIn) {
        //   this.reloadPage();
        // }
        
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
}
