import {Component, Input, Output, EventEmitter} from '@angular/core';
import {FormArray, FormGroup} from "@angular/forms";
import {CrearRutinasService} from "../services/crear-rutinas.service";


@Component({
  selector: 'app-ejercicios-form-sub-row',
  templateUrl: './ejercicios-form-sub-row.component.html',
  styleUrls: ['./ejercicios-form-sub-row.component.css']
})
export class EjerciciosFormSubRowComponent {

  @Input() index: any;
  @Input('form')
  set setForm(form: FormGroup) {
    this.form = form;
    // this.formArray = this.service.getSubRowArray(form);
  }

  @Output() clickDelete = new EventEmitter<any>();


  form: FormGroup = new FormGroup({});
  formArray: any;

  constructor(private service: CrearRutinasService) {}


}
