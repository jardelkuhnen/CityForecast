import { Forecast } from 'src/app/models/Forecast';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../core/Config/Config';

@Injectable({providedIn: 'root'})
export class WeatherService {

  constructor(private http: HttpClient) { }

  loadForecast(name: string){
    return this.http.get<Forecast>(Config.SERVICE_CITY_FORECAST + name);
  }

}
