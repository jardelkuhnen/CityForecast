import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CityComponent } from './city.component';
import { ListFormComponent } from './list-form/list-form.component';
import { CityFormComponent } from './city-form/city-form.component';
import { CityRouting } from './city-routing.module';
import { MaterialUIModule } from '../core/material/material-ui.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CityWeatherComponent } from './city-weather/weather.component';


/**
 * Criei um modulo só para a cidade,
 * normalmente é assim que fazemos, 
 * já que um módulo é um aglomerado de
 * funcionalidades em comum.
 */
@NgModule({
  imports: [
    CommonModule,
    MaterialUIModule,
    CityRouting,
    ReactiveFormsModule
  ],
  declarations: [ 
    CityComponent,
    CityFormComponent,
    CityWeatherComponent,
    ListFormComponent,
  ]
})
export class CityModule { }