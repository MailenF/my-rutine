import {Component, ComponentFactoryResolver, ViewChild, ViewContainerRef} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page-web',
  templateUrl: './home-page-web.component.html',
  styleUrls: ['./home-page-web.component.css']
})
export class HomePageWebComponent {

  constructor(private router: Router, private componentFactoryResolver: ComponentFactoryResolver) { }

}
