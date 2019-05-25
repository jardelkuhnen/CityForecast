import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: 'cidades', pathMatch: 'full' },
  { path: 'cidades', loadChildren: './city/city.module#CityModule'},
  { path: '**', redirectTo: 'cidades'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
