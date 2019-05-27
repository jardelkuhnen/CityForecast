import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { City } from '../models/City';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class CityService {

  readonly API = environment;

  constructor(private http: HttpClient) { }

  addCity(name: string): Observable<City> {
    return this.http.post<City>(this.API.SERVICE_CITY_SAVE + name, name);
  }


  getCities(): Observable<City[]>{
    return this.http.get<City[]>(this.API.SERVICE_CITY_GET_ALL);
  }
}
