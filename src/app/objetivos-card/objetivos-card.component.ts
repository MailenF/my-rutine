import {Component, OnInit} from '@angular/core';
import {Objetivos} from "../models/objetivos";
import {MatDialog} from "@angular/material/dialog";
import {ObjetivosService} from "../services/objetivos.service";
import {ObjetivosDialogComponent} from "../objetivos-dialog/objetivos-dialog.component";

@Component({
  selector: 'app-objetivos-card',
  templateUrl: './objetivos-card.component.html',
  styleUrls: ['./objetivos-card.component.css']
})
export class ObjetivosCardComponent implements OnInit{

  objetivos: Objetivos[] = [];

  constructor(private objetivosService: ObjetivosService) {
  }

  ngOnInit() {
    this.obtenerObjetivos();
  }

  obtenerObjetivos() {
    this.objetivosService.getObjetivos().subscribe(objetivos => {
      this.objetivos = objetivos;
    })
  }

  eliminarObjetivo(objetivo: Objetivos) {
    this.objetivosService.deleteObjetivo(objetivo);
  }
}
