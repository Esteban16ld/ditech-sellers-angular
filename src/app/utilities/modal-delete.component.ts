import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
    templateUrl: 'modal-delete.component.html'
})

export class ModalDeleteComponent{
    constructor(public dialogRef: MatDialogRef<ModalDeleteComponent>){
        
    }
}