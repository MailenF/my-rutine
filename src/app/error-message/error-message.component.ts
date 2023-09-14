import {Component, Input} from '@angular/core';
import {AbstractControl} from "@angular/forms";
import {validatorErrorMessage} from "./validator-message";

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent {
@Input() control!: AbstractControl;


  get errorMessage(): string {
  const error = this.control?.errors;
  const validatorName = Object.keys(error ?? {})[0];
  return this.control.touched && validatorName
    ? validatorErrorMessage(validatorName)
    : ''
  }
}
