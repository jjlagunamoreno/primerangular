import { Component, ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-tablamultiplicarpaco',
  templateUrl: './tablamultiplicarpaco.component.html',
  styleUrl: './tablamultiplicarpaco.component.css'
})
export class TablamultiplicarpacoComponent {
  @ViewChild("cajanumero") cajaNumeroRef! : ElementRef;
  public numeros: Array<number>;
  public numero: number;
  constructor() {
    this.numeros = new Array<number>();
    this.numero = 0;
  }
  mostrarTabla(): void {
    this.numero = parseInt(this.cajaNumeroRef.nativeElement.value);
    let aux = new Array<number>();
    for (var i = 1; i <= 10; i++){
      var resultado = this.numero * i;
      aux.push(resultado);
    }
    this.numeros = aux;
  }
}