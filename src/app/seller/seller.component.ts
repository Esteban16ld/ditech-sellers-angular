import { Component, OnInit } from '@angular/core';
import { ApiSellerService } from '../services/api-seller.service';
import { SellerModel } from '../models/seller.model';
import { ModalSellerComponent } from './modal/modal-seller.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModalDeleteComponent } from '../utilities/modal-delete.component';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss']
})
export class SellerComponent implements OnInit {

  public columnas: string[] = ['Documento', 'Nombre', 'Apellido', 'Sucursal', 'Actions'];
  public listSellers: any[] = [];
  readonly width: string = '300px'

  constructor(
    private apiSeller: ApiSellerService,
    private dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getSellers();
  }

  getSellers(){
    this.apiSeller.getSellers().subscribe(response => {
      this.listSellers = response
    })
  }

  openAddSeller(){
    const dialogRef = this.dialog.open(ModalSellerComponent, {
      width: this.width
    })
    dialogRef.afterClosed().subscribe(result => {
      this.getSellers();
    })
  }

  openEditSeller(seller: SellerModel){
    const dialogRef = this.dialog.open(ModalSellerComponent, {
      width: this.width,
      data: seller
    })
    dialogRef.afterClosed().subscribe(result => {
      this.getSellers();
    })
  }

  openDeleteSeller(seller: SellerModel){
    const dialogRef = this.dialog.open(ModalDeleteComponent, {
      width: this.width,
      data: seller
    })
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.apiSeller.deleteSeller(seller.DOCUMENT).subscribe(response =>{
          if(response){
            this.snackBar.open('Vendedor eliminado con exito', '', {
              duration: 2000
            })
            this.getSellers();
          }
        })
      }
    })
  }
}
