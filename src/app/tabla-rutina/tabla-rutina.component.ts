import { Component } from '@angular/core';
import {Rutinas} from "../models/rutinas";
import {MostrarRutinasService} from "../services/mostrar-rutinas.service";

@Component({
  selector: 'app-tabla-rutina',
  templateUrl: './tabla-rutina.component.html',
  styleUrls: ['./tabla-rutina.component.css']
})
export class TablaRutinaComponent {
  rutina: Rutinas[] = [];

  constructor(private mostrarRutina: MostrarRutinasService) {
    this.mostrarRutina.rutina.subscribe((rutina) => {
      this.rutina = rutina;
    })

  }
}
