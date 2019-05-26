import { City } from 'src/app/models/City';
import { WeatherService } from './../../services/weather.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Forecast } from 'src/app/models/Forecast';
import { TemperatureItem } from 'src/app/models/TemperatureItem';
import {CdkTableModule} from '@angular/cdk/table';
import { MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']

})
export class CityWeatherComponent implements OnInit { 
    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private service: WeatherService,
      private messages: MatSnackBar
    ) { }

  displayedColumns: string[] = ['date', 'temperatureValue', 'temperatureMin', 'temperatureMax', 'temperatureUnit'];
  dataSource: MatTableDataSource<Forecast> = new MatTableDataSource([]);
  city: City = { id: undefined, name: undefined };


  forecast: Forecast;

    ngOnInit() {
      const name = this.route.snapshot.params.name;
      this.loadForecast(name);
    }
    loadForecast(name: string){
      this.service.loadForecast(name).subscribe(forecast => {this.dataSource.data = forecast.list, this.city = forecast.city}, error => this.showError('Não localizado previsão para a cidade informada!'));
    }

    showError(message: string) {
      setTimeout(() => this.messages.open(message, 'Close', { duration: 4000 }), 1);
    }
}
