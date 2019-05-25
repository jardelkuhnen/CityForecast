import { City } from 'src/app/models/City';
import { WeatherService } from './../../services/weather.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Forecast } from 'src/app/models/Forecast';
import { TemperatureItem } from 'src/app/models/TemperatureItem';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']

})
export class CityWeatherComponent implements OnInit { 

  forecast: Forecast;
  // city: City = this.forecast.city;
  // temperatureItem: TemperatureItem[] = this.forecast.list;

  constructor(
    private activatedRouted: ActivatedRoute,
    private service: WeatherService) { }

  ngOnInit() {
    const name = this.activatedRouted.snapshot.params.name;
    this.loadForecast(name);
    console.log(this.forecast.list);
  }


  loadForecast(name: string){
    this.service.loadForecast(name).subscribe(
      dados => this.forecast = dados);
  }

}
