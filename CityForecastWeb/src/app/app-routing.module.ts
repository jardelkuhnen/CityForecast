import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityComponent } from './city/city.component';
import { CityInformationComponent } from './city-information/city-information.component';

const routes: Routes = [

{
   path: '',
  component: CityComponent
},
{
  path: 'informacoes',
  component: CityInformationComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
