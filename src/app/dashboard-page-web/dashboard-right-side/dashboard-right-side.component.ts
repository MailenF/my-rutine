import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "@angular/fire/auth";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard-right-side',
  templateUrl: './dashboard-right-side.component.html',
  styleUrls: ['./dashboard-right-side.component.css']
})
export class DashboardRightSideComponent {
  // user$!:Observable<User | null>;
  selected: Date | null = new Date();
  //
  // constructor(private authService: AuthService, private router: Router) {
  //   this.user$ = this.authService.userState$;
  // }
  //
  // async onSignOut(): Promise<void> {
  //   await this.authService.signOut()
  // }
}
