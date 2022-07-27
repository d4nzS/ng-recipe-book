import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

import { DataStorageService } from "../shared/data-storage.service";
import { AuthService } from "../auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  public collapsed = true;
  public isAuthenticated = false;

  private userSub: Subscription;

  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.userSub = this.authService.user
      .subscribe(user => this.isAuthenticated = !!user);
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  public onSaveData(): void {
    this.dataStorageService.storeRecipes();
  }

  public onFetchData(): void {
    this.dataStorageService.fetchRecipes().subscribe();
  }
}
