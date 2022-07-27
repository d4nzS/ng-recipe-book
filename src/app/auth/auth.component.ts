import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { AuthService } from "./auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {
  public isLoginMode = true
  public authForm: FormGroup;

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
    if (this.authForm.invalid ) {
      return;
    }

    const {email, password} = this.authForm.value;

    if (this.isLoginMode) {
      // ...
    } else {
      this.authService.signup(email, password)
        .subscribe(
          responseData => console.log(responseData),
          error => console.log(error)
        );
    }

    this.authForm.reset();
  }
}
