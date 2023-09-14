import {Component, OnInit} from '@angular/core';
import {RutinasFirebaseService} from "../services/rutinas-firebase.service";
import {Rutinas} from "../models/rutinas";
import {MostrarRutinasService} from "../services/mostrar-rutinas.service";
import Swal from 'sweetalert2'
import {AuthService} from "../services/auth.service";
import {Observable} from "rxjs";
import {User} from "@angular/fire/auth";

@Component({
  selector: 'app-card-rutina',
  templateUrl: './card-rutina.component.html',
  styleUrls: ['./card-rutina.component.css']
})
export class CardRutinaComponent implements OnInit{
  user$!:Observable<User | null>;
  rutinas: Rutinas[] = [];
  show = true;
  userId: any;

constructor( private rutinasFirebase: RutinasFirebaseService, private mostrarRutina: MostrarRutinasService) {}

ngOnInit() {
 this.getAllRutines();
}

getAllRutines() {
  this.rutinasFirebase.getRutine().subscribe((rutinas) => {
      this.rutinas = rutinas;

      if(this.rutinas.length > 0) {
        this.show = false;
      } else {
        this.show;
      }
    })
  }

  showRutina(id: any): void {
    this.mostrarRutina.mostrarRutina(id);
  }

  deleteRutina(rutina: Rutinas) {
    Swal.fire({
      title: 'Estas seguro que deseas eliminar ?',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.rutinasFirebase.deleteRutine(rutina).then((result) => {
          Swal.fire(
            result,
          )
        });
      }
    })

  }
}
