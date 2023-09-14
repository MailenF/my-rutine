import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ObjetivosDialogComponent} from "../objetivos-dialog/objetivos-dialog.component";

@Component({
  selector: 'app-objetivos-page-web',
  templateUrl: './objetivos-page-web.component.html',
  styleUrls: ['./objetivos-page-web.component.css']
})
export class ObjetivosPageWebComponent {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(ObjetivosDialogComponent);
  }
}
