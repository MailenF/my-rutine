import { Component } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Observable} from "rxjs";
import { User } from '@angular/fire/auth'


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  texto: string = 'MIRUTINA';
  primerasLetras: string;
  restoTexto: string;
  user$!:Observable<User | null>;

  constructor(private authService: AuthService) {
    this.primerasLetras = this.texto.slice(0, 2);
    this.restoTexto = this.texto.slice(2);
    this.user$ = this.authService.userState$;
  }

  async onSignOut(): Promise<void> {
    await this.authService.signOut()
  }
}
