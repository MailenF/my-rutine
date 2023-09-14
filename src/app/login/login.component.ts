import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "@angular/fire/auth";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user$!:Observable<User | null>;
  selected: Date | null = new Date();
  emailPrefix: string | null = null;

  constructor(private authService: AuthService) {
    this.user$ = this.authService.userState$;

    this.user$.subscribe(user => {
      if (user && user.email) {
        const emailParts = user.email.split('@');
        if (emailParts.length > 0) {
          this.emailPrefix = emailParts[0];
        }
      }
    });
  }

  async onSignOut(): Promise<void> {
    await this.authService.signOut()
  }
}
