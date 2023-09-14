import {Component, OnInit} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';
import {getAuth} from 'firebase/auth';
import {CrearRutinasService} from "../services/crear-rutinas.service";
import {RutinasFirebaseService} from "../services/rutinas-firebase.service";
import {Colors} from "../models/colors";
import {DataColors} from "../models/data-colors";
import {Rutinas} from "../models/rutinas";
import {Router} from "@angular/router";
import { DatePipe } from '@angular/common';
import Swal from "sweetalert2";

@Component({
  selector: 'app-rutina-form',
  templateUrl: './rutina-form.component.html',
  styleUrls: ['./rutina-form.component.css']
})
export class RutinaFormComponent implements OnInit {
  form: FormGroup;
  formRutina: FormArray;
  auth = getAuth();
  user = this.auth.currentUser;
  colors: Colors[] = [];
  rutinas: Rutinas[] = [];

  constructor(
    private crearRutinaService: CrearRutinasService, private rutinasFirebase: RutinasFirebaseService, private router: Router, private dp: DatePipe ) {
    this.form = crearRutinaService.formulario;
    this.formRutina = crearRutinaService.formulario.get('rutina') as FormArray;
  }

  ngOnInit() {
    const currDate = this.dp.transform( new Date(), 'dd-MM-yyyy' );
    if (this.user !== null) {
      this.crearRutinaService.formulario.get('idUser')?.setValue(this.user.uid);
      this.crearRutinaService.formulario.get('date')?.setValue(currDate)
    }
    this.obtenerRutinas();
  }

  clickAddEjercicio() {
    this.crearRutinaService.clickAddRow();
  }

  asFormArray(form: FormArray): FormGroup[] {
    return form.controls as FormGroup[];
  }

  clickDeleteSubRow( index: any ) {
    this.formRutina.removeAt(index);
  }

  obtenerRutinas() {
    // Llamada al servicio para obtener las rutinas
    this.rutinasFirebase.getRutine().subscribe(
      (rutinas) => {
        this.rutinas = rutinas;
        this.filtrarColores();
      },
      (error) => {
        console.error('Error al obtener las rutinas', error);
      }
    );
  }

  filtrarColores() {
    const coloresRutinas = this.rutinas.map((rutina) => rutina.color);
    // Eliminar los objetos de colores que coincidan con coloresRutinas
    this.colors = DataColors.filter((color) => !coloresRutinas.includes(color.value));
  }

  submitForm(): void {
    console.log(this.form.value);
    this.rutinasFirebase.addRutine(this.form.value)?.then((mensaje) => {
      if (mensaje) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Su rutina fue guardada con éxito',
          showConfirmButton: false,
          timer: 1500
        })
        location.reload();
      } else {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Oops...',
          text: 'Ocurrió un error, intente nuevamente!',
        })
      }
    })

  }
}
