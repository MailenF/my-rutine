import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {Observable} from "rxjs";
import {User} from "@angular/fire/auth";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnDestroy {

  texto: string = 'MIRUTINA';
  primerasLetras: string;
  restoTexto: string;
  mobileQuery: MediaQueryList;
  isSidebarOpen: boolean = true; // Agrega esta propiedad
  private _mobileQueryListener: () => void;


  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.primerasLetras = this.texto.slice(0, 2);
    this.restoTexto = this.texto.slice(2);
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
