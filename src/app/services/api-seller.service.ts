import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SellerModel } from '../models/seller.model';

const httpOption = {
  headers: new HttpHeaders({
    'Contend-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiSellerService {

  url: string = 'https://localhost:44384/api/Seller';

  constructor(
    private http: HttpClient
  ) { }

  getSellers(): Observable<SellerModel[]>{
      return this.http.get<SellerModel[]>(this.url + '/GetSellers');
  }

  addSeller(seller: SellerModel): Observable<boolean>{
    return this.http.post<boolean>(this.url + '/CreateSeller', seller, httpOption);
  }

  editSeller(seller: SellerModel): Observable<boolean>{
    return this.http.put<boolean>(this.url + '/UpdateSeller', seller, httpOption);
  }

  deleteSeller(DOCUMENT: string): Observable<boolean>{
    return this.http.delete<boolean>(this.url + '/DeleteSeller?document=' + DOCUMENT);
  }

}