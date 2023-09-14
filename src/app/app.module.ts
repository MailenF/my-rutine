import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomePageWebComponent } from './home-page-web/home-page-web.component';
import { InicioSesionPageComponent } from './inicio-sesion-page/inicio-sesion-page.component';
import { MisServiciosCardsComponent } from './mis-servicios-cards/mis-servicios-cards.component';
import { MisServiciosPageComponent } from './mis-servicios-page/mis-servicios-page.component';
import { MisServiciosPageWebComponent } from './mis-servicios-page-web/mis-servicios-page-web.component';
import { RutinasPageComponent } from './rutinas-page/rutinas-page.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {MatSelectModule} from '@angular/material/select';


import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RegistroPageComponent } from './registro-page/registro-page.component';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { EmailVerifiedComponent } from './email-verified/email-verified.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RutinasPageWebComponent } from './rutinas-page-web/rutinas-page-web.component';
import { RutinaFormComponent } from './rutina-form/rutina-form.component';
import { EjerciciosFormComponent } from './ejercicios-form/ejercicios-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { EjerciciosFormSubRowComponent } from './ejercicios-form-sub-row/ejercicios-form-sub-row.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CardRutinaComponent } from './card-rutina/card-rutina.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatListModule} from '@angular/material/list';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { DashboardPageWebComponent } from './dashboard-page-web/dashboard-page-web.component';
import {MatTableModule} from '@angular/material/table';
import { TablaRutinaComponent } from './tabla-rutina/tabla-rutina.component';
import { DatePipe } from '@angular/common';
import { OrganizadorPageComponent } from './organizador-page/organizador-page.component';
import { OrganizadorPageWebComponent } from './organizador-page-web/organizador-page-web.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ObjetivosPageComponent } from './objetivos-page/objetivos-page.component';
import { ObjetivosPageWebComponent } from './objetivos-page-web/objetivos-page-web.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ObjetivosDialogComponent } from './objetivos-dialog/objetivos-dialog.component';
import {MatMenuModule} from '@angular/material/menu';
import { ObjetivosCardComponent } from './objetivos-card/objetivos-card.component';
import { DashboardRightSideComponent } from './dashboard-page-web/dashboard-right-side/dashboard-right-side.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { OrganizadorCardComponent } from './organizador-card/organizador-card.component';
import { HomePageMobileComponent } from './home-page-mobile/home-page-mobile.component';
import { DashboarPageMobileComponent } from './dashboar-page-mobile/dashboar-page-mobile.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LoginComponent } from './login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HomePageWebComponent,
    InicioSesionPageComponent,
    MisServiciosCardsComponent,
    MisServiciosPageComponent,
    MisServiciosPageWebComponent,
    RutinasPageComponent,
    ToolbarComponent,
    RegistroPageComponent,
    ErrorMessageComponent,
    EmailVerifiedComponent,
    ForgotPasswordComponent,
    RutinasPageWebComponent,
    RutinaFormComponent,
    EjerciciosFormComponent,
    EjerciciosFormSubRowComponent,
    CardRutinaComponent,
    SidenavComponent,
    DashboardPageComponent,
    DashboardPageWebComponent,
    TablaRutinaComponent,
    OrganizadorPageComponent,
    OrganizadorPageWebComponent,
    ObjetivosPageComponent,
    ObjetivosPageWebComponent,
    ObjetivosDialogComponent,
    ObjetivosCardComponent,
    DashboardRightSideComponent,
    OrganizadorCardComponent,
    HomePageMobileComponent,
    DashboarPageMobileComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatMenuModule,
    MatCheckboxModule,
    MatToolbarModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
