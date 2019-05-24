import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialUiModule } from '../core/material-ui.module';
import { CityComponent } from './city.component';
import { City } from '../model/City';

@NgModule({
  declarations: [
    CityComponent
  ],
  exports: [
    CityComponent
  ],
  imports: [
    CommonModule,
    MaterialUiModule
  ]
})
export class CityModule { }
