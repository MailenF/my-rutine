import {Component, Input, Output, EventEmitter} from '@angular/core';
import {FormArray, FormGroup} from "@angular/forms";
import {CrearRutinasService} from "../services/crear-rutinas.service";

@Component({
  selector: 'app-ejercicios-form',
  templateUrl: './ejercicios-form.component.html',
  styleUrls: ['./ejercicios-form.component.css']
})
export class EjerciciosFormComponent {

  @Input() index: any;
  @Input('form')
  set setForm(form: FormGroup) {
    this.form = form;
    this.formArray = this.serviceCrearRutina.getRowArray(form) as FormArray;
  }
  @Output() clickDelete: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup = new FormGroup({});
  formArray: any;

  constructor(private serviceCrearRutina: CrearRutinasService) {
  }


  clickAddSubRow() {
    this.serviceCrearRutina.clickAddSubRow(this.form);
  }

  clickDeleteSubRow(index: any) {
    this.formArray.removeAt(index);
  }

  asArrayOfFormGroup(form: FormArray): FormGroup[] {
    return form.controls as FormGroup[];
  }
}
