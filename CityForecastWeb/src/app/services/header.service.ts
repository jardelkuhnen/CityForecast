import { Injectable } from '@angular/core';
import { of } from 'rxjs';


export class Menu {
  constructor(public name: string, public path: string) { }
}


@Injectable({ providedIn: 'root' })
export class HeaderService {


  /**
   * Hack pra simular os retornos do menu para o header, sem precisar escrever muito html.
   */
  getMenus() {
    return of([
      new Menu('Cidades', 'cidades')
    ]);
  }

}
