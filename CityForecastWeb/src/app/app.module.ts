import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityComponent } from './city/city.component';
import { MaterialUiModule } from './core/material-ui.module';
import { CityModule } from './city/city.module';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { CityInformationComponent } from './city-information/city-information.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CityInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialUiModule,
    CityModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
