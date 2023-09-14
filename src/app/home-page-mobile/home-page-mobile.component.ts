import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-home-page-mobile',
  templateUrl: './home-page-mobile.component.html',
  styleUrls: ['./home-page-mobile.component.css']
})
export class HomePageMobileComponent {
  value = false;
  @ViewChild('sidenav') sidenav!: MatSidenav;
  constructor() {}
  ngOnInit(): void {}
  close() {
    this.sidenav.close();
  }

  capturar(): void {
    this.value = !this.value;
  }
}
