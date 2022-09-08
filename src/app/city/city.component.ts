import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModalCityComponent } from './modal/modal-city.component';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  readonly width: string = '300px';

  constructor(
    private dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  openAddCity(){
    const dialogRef = this.dialog.open(ModalCityComponent, {
      width: this.width
    })
    dialogRef.afterClosed().subscribe(result => {
    })
  }
}
