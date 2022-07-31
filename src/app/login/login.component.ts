import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loginError: Boolean = false;
  isUserLogged: Boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder:FormBuilder
  ) { 
    this.isUserLogged = this.authService.isUserLogged();
    this.form = this.formBuilder.group(
      {
        email:['',[Validators.required, Validators.email]],
        password:['',[Validators.required, Validators.minLength(8)]]
      }
    )
  }

  ngOnInit(): void {
  }

  onSubmit(event: Event){
    event.preventDefault;
    
    this.authService.login(this.form.value).subscribe(
      (response: Boolean) => {
        if (response){
          window.location.reload();
        }
        else
          this.loginError =true;
      }
    );
  }
  logout(): void {
    this.authService.logout();
    this.isUserLogged = false;
    window.location.reload();
  }

  get Email(){
    return this.form.get('email')
  }
  get Password(){
    return this.form.get('password')
  }
}
