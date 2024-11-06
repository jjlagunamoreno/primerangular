import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sumarnumeros',
  templateUrl: './sumarnumeros.component.html',
  styleUrl: './sumarnumeros.component.css'
})
export class SumarnumerosComponent {
  // DECLARAMOS VARIABLES PARA HACER REFERENCIA A LAS CAJAS
  // <input/> MEDIANTE SU ID DE ANGULAR
  @ViewChild("cajanumero1") cajaNumero1Ref: ElementRef;
  @ViewChild("cajanumero2") cajaNumero2Ref: ElementRef;

  public suma!: number;
  //EN ANGULAR TODAS LAS PROPIEDADES DEBEN SER INSTANCIADAS/INICIADAS
  // LOS OBJETOS DE REFERENCIA DEBEMOS UTILIZAR UNA SINTAXIS
  // MEDIANTE SU CONSTRUCTOR (new) E INDICAR EL VALOR POR DEFECTO QUE
  // DESEAMOS QUE TENGAN LAS CAJAS
  constructor() {
    this.suma = 0;
    this.cajaNumero1Ref = new ElementRef(0);
    this.cajaNumero2Ref = new ElementRef(0);
  }

  sumarNumeros(): void {
    let num1 = this.cajaNumero1Ref.nativeElement.value;
    let num2 = this.cajaNumero2Ref.nativeElement.value;
    this.suma = parseInt(num1) + parseInt(num2);
  }
}
