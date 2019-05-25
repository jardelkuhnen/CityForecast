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
  
  cidades: City[];
  
  ngOnInit(): void {
    this.service.getCities().subscribe(dados => this.cidades = dados) ;
  }


  /**
   * Dados que vem da api.
   * Criar servico que comunica com api, usar HttpClient.
   */
  constructor(private service: CityService) { }
}
