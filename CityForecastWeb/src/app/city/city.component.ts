import { Component, OnInit } from '@angular/core';

import { City } from '../model/City';
import { CityService } from '../services/CityService';


@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  constructor(){}

  ngOnInit() {

  }


}
