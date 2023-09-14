import {Component, Output} from '@angular/core';
import {Observable} from "rxjs";
import {User} from "@angular/fire/auth";
import {AuthService} from "../services/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  texto: string = 'MIRUTINA';
  primerasLetras: string;
  restoTexto: string;
  user$!:Observable<User | null>;
  selectedItemIndex: number = 0;

  constructor(private authService: AuthService, private router: Router) {
    this.primerasLetras = this.texto.slice(0, 2);
    this.restoTexto = this.texto.slice(2);
    this.user$ = this.authService.userState$;
  }

  async onSignOut(): Promise<void> {
    await this.authService.signOut()
  }

}
