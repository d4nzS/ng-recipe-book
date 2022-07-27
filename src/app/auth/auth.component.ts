import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";

import { AuthResponseData, AuthService } from "./auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {
  public authForm: FormGroup;

  public isLoginMode = true
  public isLoading = false;

  public error: string = null;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authForm = new FormGroup({
      'email': new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      'password': new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ])
    })
  }

  public onSwitchMode(): void {
    this.isLoginMode = !this.isLoginMode;
  }

  public onSubmit(): void {
    if (this.authForm.invalid) {
      return;
    }

    const {email, password} = this.authForm.value;
    const authObs: Observable<AuthResponseData>
      = this.isLoginMode
      ? this.authService.login(email, password)
      : this.authService.signup(email, password);

    this.isLoading = true;
    authObs.subscribe(
      responseData => {
        console.log(responseData);

        this.isLoading = false;
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;

        this.isLoading = false;
      }
    );

    this.authForm.reset();
  }
}
