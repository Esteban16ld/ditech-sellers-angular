import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CityModel } from '../models/city.model';

const httpOption = {
  headers: new HttpHeaders({
    'Contend-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiCityService {

  url: string = 'https://localhost:44384/api/City';

  constructor(
    private http: HttpClient
  ) { }

  getCities(): Observable<CityModel[]>{
      return this.http.get<CityModel[]>(this.url + '/GetCities');
  }

  addCity(city: CityModel): Observable<boolean>{
    return this.http.post<boolean>(this.url + '/CreateCity', city, httpOption);
  }

  deleteSeller(description: string): Observable<boolean>{
    return this.http.delete<boolean>(this.url + '/DeleteCity?description=' + description);
  }

}