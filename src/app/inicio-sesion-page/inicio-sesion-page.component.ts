import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators } from "@angular/forms";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-inicio-sesion-page',
  templateUrl: './inicio-sesion-page.component.html',
  styleUrls: ['./inicio-sesion-page.component.css']
})
export class InicioSesionPageComponent implements OnInit{
 form!: FormGroup;
 private readonly emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 constructor(private readonly fb: FormBuilder, private authSrv: AuthService) {}

 ngOnInit(): void {
   this.initForm()
 }

  private initForm(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

 onSubmit(): void {
  const {email, password } = this.form.value
   this.authSrv.signIn(email, password);
 }


  singWithGoogle(): void {
 // this.authSrv.singInGoogle();

  }
  hasError(field: string): boolean {
   const fieldName = this.form.get(field)
   return !!fieldName?.invalid && fieldName.touched
  }
}
