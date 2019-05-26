import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/services/city.service';
import { City } from 'src/app/models/City';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.css']
})
export class ListFormComponent implements OnInit{
  
  constructor(private service: CityService) { }

  cidades: City[];
  
  ngOnInit(): void {
    this.loadCities();
  }

  private loadCities() {
    this.service.getCities().subscribe(dados => this.cidades = dados);
  }
}
