import {Component, OnInit} from '@angular/core';
import {RutinasFirebaseService} from "../services/rutinas-firebase.service";
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-organizador-card',
  templateUrl: './organizador-card.component.html',
  styleUrls: ['./organizador-card.component.css']
})
export class OrganizadorCardComponent implements OnInit {
  rutinas: any[] = [];
  disabled = false;
  days = [1, 2, 3, 4, 5, 6, 7];
  rutinasSeleccionadas: any[] = [];


  constructor(private rutinasFirebase: RutinasFirebaseService) {
  }

  ngOnInit() {
    this.getAllRutines();
  }

  getAllRutines() {
    this.rutinasFirebase.getRutine().subscribe((rutinas) => {
      this.rutinas = rutinas;
      this.rutinas.forEach(rutina => {
        rutina.indexDiaSeleccionado = [] as number[];
        rutina.diaSeleccionado = -1;
      });
    })
  }

  isDayDisabled(rutinaIndex: number, dayIndex: number): boolean {
    return this.rutinas.some((rutina, index) =>
      index !== rutinaIndex && rutina.indexDiaSeleccionado?.includes(dayIndex)
    );
  }



  toggleDaySelection(rutinaIndex: number, dayIndex: number, rutin: any): void {


    const rutina = this.rutinas[rutinaIndex];
    const daySelectedIndex = rutina.indexDiaSeleccionado.indexOf(dayIndex);

    if (daySelectedIndex !== -1) {
      //Deseleccionar el checkbox
      rutina.indexDiaSeleccionado.splice(daySelectedIndex, 1);
      //Busco el index de la rutina deseleccionada
      const rutinaSeleccionadaIdx = this.rutinasSeleccionadas.findIndex(value => value.diaSeleccionado === dayIndex + 1);
      //Elimino esa rutina del array
      this.rutinasSeleccionadas.splice(rutinaSeleccionadaIdx, 1);
      console.log(this.rutinasSeleccionadas);
    } else {
      rutina.indexDiaSeleccionado.push(dayIndex);
      //Creo un nuevo objeto de rutina
      const nuevaRutina = { ...rutin, diaSeleccionado: dayIndex + 1 };

      //Agrego la rutina si no existe en el array
      if (this.rutinasSeleccionadas.indexOf(nuevaRutina) === -1) {
        this.rutinasSeleccionadas.push(nuevaRutina);
      }
    }
  }


  generatePDF() {
      let content = [
      ];

      for(let i = 0; i < this.rutinasSeleccionadas.length; i++) {
        let nuevoObjeto = {
          text: `\nDía: ${this.rutinasSeleccionadas[i].diaSeleccionado} - ${this.rutinasSeleccionadas[i].nameRutina}`,
          style: 'header'
        };
        content.push(nuevoObjeto);
        let objeto = {
          ul: [] as { text: string; listType: string }[] ,
        };
        for( let j = 0; j < this.rutinasSeleccionadas[i].rutina.length; j++ ) {
          let ejercicio = this.rutinasSeleccionadas[i].rutina[j].ejercicio;
          let repeticiones = [];

          for (let k = 0; k < this.rutinasSeleccionadas[i].rutina[j].rowSubArray.length; k++) {
            let serie = this.rutinasSeleccionadas[i].rutina[j].rowSubArray[k].serie;
            let repeticion = this.rutinasSeleccionadas[i].rutina[j].rowSubArray[k].repeticion;
            repeticiones.push(`${serie} x ${repeticion}`);
          }

          let ulItem = {
            text: `${ejercicio} - ${repeticiones.join(' / ')}`,
            listType: 'none'
          };
          objeto.ul.push(ulItem);
        }
        content.push(objeto);
      }

      this.enviarAPdf(content);
  }

  enviarAPdf(content: any) {

    var dd = {
      content: content,
      styles: {
        header: {
          bold: true,
          fontSize: 15,
        }
      },
      defaultStyle: {
        fontSize: 12
      }
    }
    pdfMake.createPdf(dd).open();
  }

}
