import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../core/Config/Config';
import { City } from '../models/City';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CityService {

  constructor(private http: HttpClient) { }

  addCity(name: string): Observable<City> {
    return this.http.post<City>(Config.SERVICE_CITY_SAVE + name, name);
  }

  
  getCities(): Observable<City[]>{
    return this.http.get<City[]>(Config.SERVICE_CITY_GET_ALL);
  }
}
