import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SellerComponent } from './seller/seller.component';
import { CityComponent } from './city/city.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {HttpClientModule} from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalSellerComponent } from './seller/modal/modal-seller.component';
import { ModalDeleteComponent } from './utilities/modal-delete.component';
import { MatSelectModule } from '@angular/material/select';
import { ModalCityComponent } from './city/modal/modal-city.component';

@NgModule({
  declarations: [
    AppComponent,
    SellerComponent,
    CityComponent,
    ModalSellerComponent,
    ModalDeleteComponent,
    ModalCityComponent
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    MatTableModule,
    MatDialogModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
