import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {addDoc, collection, collectionData, deleteDoc, doc, Firestore} from "@angular/fire/firestore";
import {Observable, switchMap} from "rxjs";
import {Rutinas} from "../models/rutinas";
import {getFirestore, query, where} from "firebase/firestore";
import {AuthService} from "./auth.service";
import {initializeApp} from "firebase/app";
import {environment} from "../../environments/environment";
import {Objetivos} from "../models/objetivos";

@Injectable({
  providedIn: 'root'
})
export class ObjetivosService {

  // Initialize Firebase
  app = initializeApp(environment.firebase);
  db = getFirestore(this.app);

  formulario: FormGroup = this.form();

  constructor(private fb: FormBuilder, private fireStore: Firestore, private authService: AuthService) { }

  form(): FormGroup {
    return this.fb.group({
      objetivo: ['', [Validators.required]],
      idUser: ['', [Validators.required]],
    })
  }

  //Enviando mis objetivos a firebase
  async addObjetivo(objetivo: any): Promise<boolean>{
    try {
      const rutinasRef = collection(this.fireStore, 'objetivos')
      await addDoc(rutinasRef, objetivo);
      return true
    } catch (error) {
      return false
    }
  }

  // Obteniendo mis objetivos de Firebase
  getObjetivos(): Observable<Objetivos[]> {

    return this.authService.userState$.pipe(
      switchMap(user => {
        if (user && user.uid) {
          const q = query(
            collection(this.db, 'objetivos'),
            where('idUser', '==', user.uid)
          );
          return collectionData(q, { idField: 'id' }) as Observable<Objetivos[]>;
        } else {
          // If user is null or uid is not available, return an empty array of Rutinas
          return new Observable<Objetivos[]>(observer => {
            observer.next([]);
            observer.complete();
          });
        }
      })
    );
  }

  //Eliminar Objetivo
  async deleteObjetivo(objetivo: Objetivos): Promise<string> {
    try {
      const rutinaDocRef = doc(this.fireStore, `objetivos/${objetivo.id}`);
      await deleteDoc(rutinaDocRef);
      return 'Su rutina fue eliminada'
    } catch (error) {
      return 'Hubo un error, intente nuevamente'
    }

  }

}
