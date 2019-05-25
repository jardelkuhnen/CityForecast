import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListFormComponent } from './list-form/list-form.component';
import { CityWeatherComponent } from './city-weather/weather.component';

const routes: Routes = [
  
  { path: '', component: ListFormComponent },
  { path: ':name/temperaturas', component: CityWeatherComponent }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CityRouting { }