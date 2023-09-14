import { Injectable } from '@angular/core';
import {RutinasFirebaseService} from "./rutinas-firebase.service";
import {Rutinas} from "../models/rutinas";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MostrarRutinasService {

  private _rutina$: Subject<Rutinas[]>

  constructor(private rutinasFb: RutinasFirebaseService) {

    this._rutina$ = new Subject<Rutinas[]>;
  }


  mostrarRutina(id: string) {
    const rutina: Rutinas[] = [];

    this.rutinasFb.getRutine().subscribe((rutinas) => {
      rutinas.map((rut) => {
        if(rut.id === id) {
          rutina.push(rut);
        }
      })
    })
    this._rutina$.next(rutina);
  }

  get rutina(): Observable<Rutinas[]> {
    return this._rutina$.asObservable();
  }

}
