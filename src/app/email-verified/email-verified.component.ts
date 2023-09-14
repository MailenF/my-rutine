import { Component } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {filter, tap} from "rxjs";
import {User} from "@angular/fire/auth";

@Component({
  selector: 'app-email-verified',
  templateUrl: './email-verified.component.html',
  styleUrls: ['./email-verified.component.css']
})
export class EmailVerifiedComponent {
  user: User | null = null;

  constructor(private authService: AuthService) {
    this.authService.userState$.pipe(
      filter((authState) => authState !== null),
      tap((user) => this.user = user),
      tap(() => this.authService.signOut())
    ).subscribe()
  }

  onResendEmail(): void {
    if(this.user) {
      this.authService.sendEmailVerification(this.user);
    }

  }
}
