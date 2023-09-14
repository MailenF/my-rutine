import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MisServiciosPageComponent} from "./mis-servicios-page/mis-servicios-page.component";
import {RutinasPageComponent} from "./rutinas-page/rutinas-page.component";
import {InicioSesionPageComponent} from "./inicio-sesion-page/inicio-sesion-page.component";
import {RegistroPageComponent} from "./registro-page/registro-page.component";
import {EmailVerifiedComponent} from "./email-verified/email-verified.component";
import {guardGuard} from "./guards/guard.guard";
import {ForgotPasswordComponent} from "./forgot-password/forgot-password.component";
import {onlyLoggedInGuardGuard} from "./guards/only-logged-in-guard.guard";
import {DashboardPageComponent} from "./dashboard-page/dashboard-page.component";
import {OrganizadorPageComponent} from "./organizador-page/organizador-page.component";
import {ObjetivosPageComponent} from "./objetivos-page/objetivos-page.component";


const routes: Routes = [
  {path: '',  component: DashboardPageComponent},
  {path: 'services', component: MisServiciosPageComponent},
  {path: 'mis-rutinas', canActivate:[onlyLoggedInGuardGuard], component: RutinasPageComponent},
  {path: 'organizador-de-rutinas', canActivate:[onlyLoggedInGuardGuard], component: OrganizadorPageComponent},
  {path: 'mis-objetivos', canActivate: [onlyLoggedInGuardGuard], component: ObjetivosPageComponent},
  {path: 'inicio-sesion', canActivate:[guardGuard], component: InicioSesionPageComponent},
  {path: 'registro-sesion', canActivate:[guardGuard], component: RegistroPageComponent},
  {path: 'email-verified', component: EmailVerifiedComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
