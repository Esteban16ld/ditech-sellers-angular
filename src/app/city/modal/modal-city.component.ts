import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ConnectableObservable } from "rxjs";
import { CityModel } from "src/app/models/city.model";
import { ApiCityService } from "src/app/services/api-city.service";

@Component({
    templateUrl: 'modal-city.component.html'
})

export class ModalCityComponent{

    public DESCRIPTION: string = "";

    constructor(
        public dialogRef: MatDialogRef<ModalCityComponent>,
        public apiCity : ApiCityService, 
        public snackBar: MatSnackBar,
        @Inject(MAT_DIALOG_DATA) public city: CityModel
    ){}

    ngOnInit(): void {};

    close(){
        this.dialogRef.close()
    }

    addCity(){
        const city: CityModel = 
        {CODE : 0, DESCRIPTION : this.DESCRIPTION};
        this.apiCity.addCity(city).subscribe(response => {
            if(response){
                this.dialogRef.close();
                this.snackBar.open('Ciudad insertado con exito', '', {
                    duration: 2000
                });
            }
        })
    }
}