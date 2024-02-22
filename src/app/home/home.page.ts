import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  n1 = '';
  res = 0;

  ac = '';
  agh = '';
  at = '';
  nota = 0;

  somar(){
    this.res = parseFloat(this.n1) * 4.94;
  }

  calcNota(){
    this.nota = parseFloat(this.ac) * 0.2 + parseFloat(this.agh) * 0.1 + parseFloat(this.at)  * 0.7
  }

}

