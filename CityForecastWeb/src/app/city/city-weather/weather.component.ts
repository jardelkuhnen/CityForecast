import { City } from 'src/app/models/City';
import { WeatherService } from './../../services/weather.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Forecast } from 'src/app/models/Forecast';
import { TemperatureItem } from 'src/app/models/TemperatureItem';
import {CdkTableModule} from '@angular/cdk/table';
import { MatSort, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']

})
export class CityWeatherComponent implements OnInit { 
  constructor(
    private activatedRouted: ActivatedRoute,
    private service: WeatherService) { }
    
  forecast: Forecast;

    ngOnInit() {
      const name = this.activatedRouted.snapshot.params.name;
      this.loadForecast(name);
  }
  loadForecast(name: string){
    this.service.loadForecast(name).subscribe(data => {this.forecast = data;
      console.log(this.forecast);
    });
  }

}
