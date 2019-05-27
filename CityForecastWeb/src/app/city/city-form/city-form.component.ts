import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CityService } from 'src/app/services/city.service';
import { City } from 'src/app/models/City';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html'
})
export class CityFormComponent implements OnInit {

  /**
   * Representa seu formulario e os dados contidos nele.
   */
  formCidade: FormGroup;
  city: City;
  cidades: City[] = [];

  @Output() updateList = new EventEmitter();

  constructor(
    private form: FormBuilder,
    private cityService: CityService,
    private messages: MatSnackBar) { }

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
    this.city = this.formCidade.value;
    this.cityService.addCity(this.city.name).subscribe(r=> {
      this.updateList.emit(this.city);
    }, error => this.showError('Cidade não localizada!'));

  }

  showError(message: string) {
    setTimeout(() => this.messages.open(message, 'Close', { duration: 4000 }), 1);
  }

}
