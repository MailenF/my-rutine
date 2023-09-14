export interface Rutinas {
  id?: string;
  idUser: string;
  nameRutina: string;
  color: string;
  date: string;
  rutina: [
    {
      ejercicio: string;
      rowSubArray: [{ repeticion: number; serie: number }];
    }
  ];
}
