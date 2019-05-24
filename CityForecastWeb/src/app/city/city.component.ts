import { Component, OnInit } from '@angular/core';

import { City } from '../model/City';
import { CityService } from '../services/CityService';
import { Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  constructor(){}

  ngOnInit() {
  }

  cidadeForm = new FormControl('', [
    Validators.required
  ]);

  matcher = new MyErrorStateMatcher();

}
