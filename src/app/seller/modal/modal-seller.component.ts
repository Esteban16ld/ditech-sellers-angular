import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ConnectableObservable } from "rxjs";
import { SellerModel } from "src/app/models/seller.model";
import { ApiCityService } from "src/app/services/api-city.service";
import { ApiSellerService } from "src/app/services/api-seller.service";

@Component({
    templateUrl: 'modal-seller.component.html'
})

export class ModalSellerComponent{

    public CODE: number = 0;
    public NAME: string = "";
    public LAST_NAME: string = "";
    public DOCUMENT: string = "";
    public CITY_NAME: string = "";
    public listCities: any[] = [];

    constructor(
        public dialogRef: MatDialogRef<ModalSellerComponent>,
        public apiSeller: ApiSellerService,
        public apiCity : ApiCityService, 
        public snackBar: MatSnackBar,
        @Inject(MAT_DIALOG_DATA) public seller: SellerModel
    ){
        if(this.seller != null){
            this.CODE = seller.CODE;
            this.NAME = seller.NAME;
            this.LAST_NAME = seller.LAST_NAME;
            this.DOCUMENT = seller.DOCUMENT;
            this.CITY_NAME = seller.CITY_NAME;
        }
    }

    ngOnInit(): void {
        console.log(this.getCities());
      }

    close(){
        this.dialogRef.close()
    }

    addSeller(){
        const seller: SellerModel = 
        {
            CODE: 0,
            NAME : this.NAME,
            LAST_NAME : this.LAST_NAME,
            DOCUMENT : this.DOCUMENT,
            CITY_NAME : this.CITY_NAME
        };
        this.apiSeller.addSeller(seller).subscribe(response => {
            if(response){
                this.dialogRef.close();
                this.snackBar.open('Vendedor insertado con exito', '', {
                    duration: 2000
                });
            }
        })
    }

    editSeller(){
        const seller: SellerModel = 
        {
            CODE: 0,
            NAME : this.NAME,
            LAST_NAME : this.LAST_NAME,
            DOCUMENT : this.DOCUMENT,
            CITY_NAME : this.CITY_NAME
        };
        this.apiSeller.editSeller(seller).subscribe(response => {
            if(response){
                this.dialogRef.close();
                this.snackBar.open('Vendedor modificado con exito', '', {
                    duration: 2000
                });
            }
        })
    }

    getCities(){
        this.apiCity.getCities().subscribe(response => {
          this.listCities = response
        })
      }
}