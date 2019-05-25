import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CityService } from 'src/app/services/city.service';
import { City } from 'src/app/models/City';

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html'
})
export class CityFormComponent implements OnInit {

  /**
   * Representa seu formulario e os dados contidos nele.
   */
  formCidade: FormGroup;
  cidadeName: string = '';
  cidades: City[] = [];
  city: City;

  /**
   * Builder que constroi o formulario, e tipo o string builder do java.
   * @param form o teu formulario de cidade
   */
  constructor(
    private form: FormBuilder,
    private cityService: CityService) { }

  ngOnInit() {

    /**
     * Associa teu form com o form do html, pode ver que a prop name daqui e igual
     * ao formControlName do form, assim voce consegue ligar os campos.
     */
    this.formCidade = this.form.group({
      name: ''
    });
  }

  save() {
    this.cidadeName = this.formCidade.value.name;

    this.cityService.addCity(this.cidadeName);
  }

}
