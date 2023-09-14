import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {environment} from "../../environments/environment";
import {Rutinas} from "../models/rutinas";
import {
  collection,
  Firestore,
  addDoc,
  collectionData,
  doc,
  deleteDoc,
} from '@angular/fire/firestore';
import {Observable, switchMap} from "rxjs";
import { query, where } from 'firebase/firestore';
import {AuthService} from "./auth.service";
import { User } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class RutinasFirebaseService {

  // Initialize Firebase
  app = initializeApp(environment.firebase);
  db = getFirestore(this.app);

  constructor(private fireStore: Firestore, private authService: AuthService) {
  }

  //Enviando mis rutinas a Firebase
  async addRutine(rutinas: any): Promise<boolean>{
    try {
      const rutinasRef = collection(this.fireStore, 'rutinas')
      await addDoc(rutinasRef, rutinas);
      return true
    } catch (error) {
      return false
    }
  }


  // Obteniendo mis rutinas de Firebase
   getRutine(): Observable<Rutinas[]> {

     return this.authService.userState$.pipe(
       switchMap(user => {
         if (user && user.uid) {
           const q = query(
             collection(this.db, 'rutinas'),
             where('idUser', '==', user.uid)
           );
           return collectionData(q, { idField: 'id' }) as Observable<Rutinas[]>;
         } else {
           // If user is null or uid is not available, return an empty array of Rutinas
           return new Observable<Rutinas[]>(observer => {
             observer.next([]);
             observer.complete();
           });
         }
       })
     );
  }

  async deleteRutine(rutina: Rutinas): Promise<string> {
    try {
      const rutinaDocRef = doc(this.fireStore, `rutinas/${rutina.id}`);
      await deleteDoc(rutinaDocRef);
      return 'Su rutina fue eliminada'
    } catch (error) {
      return 'Hubo un error, intente nuevamente'
    }

  }
}
