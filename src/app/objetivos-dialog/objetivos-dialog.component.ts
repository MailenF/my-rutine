import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {ObjetivosService} from "../services/objetivos.service";
import {getAuth} from "firebase/auth";
import Swal from 'sweetalert2'
import {Objetivos} from "../models/objetivos";

@Component({
  selector: 'app-objetivos-dialog',
  templateUrl: './objetivos-dialog.component.html',
  styleUrls: ['./objetivos-dialog.component.css']
})
export class ObjetivosDialogComponent implements OnInit{
  form: FormGroup;
  auth = getAuth();
  user = this.auth.currentUser;

  constructor(private objetivosService: ObjetivosService) {
    this.form = this.objetivosService.formulario;
  }

  ngOnInit() {
    if (this.user !== null) {
      this.objetivosService.formulario.get('idUser')?.setValue(this.user.uid);
    }
  }

  submitForm() {
    this.objetivosService.addObjetivo(this.form.value).then((value) => {
      if (value) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Objetivo guardado correctamente',
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
    });
  }
}
