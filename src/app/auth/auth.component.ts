import { Component } from "@angular/core";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  public isLoginMode = true;

  public onSwitchMode(): void {
    this.isLoginMode = !this.isLoginMode;
  }
}
