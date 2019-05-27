import { Forecast } from 'src/app/models/Forecast';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class WeatherService {

  readonly API = environment;

  constructor(private http: HttpClient) { }

  loadForecast(name: string): Observable<Forecast>{
    return this.http.get<Forecast>(this.API.SERVICE_CITY_FORECAST + name);
  }

}
