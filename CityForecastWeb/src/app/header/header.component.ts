import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu, HeaderService } from '../services/header.service';

/**
 * selector = seletor para exiber o componente.
 * templateUrl = url para o html desse componente.
 * styleUrls = array de urls que podem compor o css do seu componente.
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menus$: Observable<Menu[]>;

  constructor(private header: HeaderService) { }


  /**
   * Pega os menus que retornam do serviço de header.
   * É algo um pouco mais avançado pois trabalho com pipe async e observable.
   */
  ngOnInit() {
    this.menus$ = this.header.getMenus();
  }

}
