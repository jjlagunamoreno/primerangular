import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tablamultiplicar',
  templateUrl: './tablamultiplicar.component.html',
  styleUrl: './tablamultiplicar.component.css'
})
export class TablamultiplicarComponent {
  @ViewChild("cajanumero") cajaNumeroRef!: ElementRef;

  public resultados: { multiplicador: number; resultado: number }[] = [];

  multiplicarNumero(): void {
    const num1 = parseInt(this.cajaNumeroRef.nativeElement.value, 10);
    this.resultados = [];
    for (let i = 0; i <= 10; i++) {
      this.resultados.push({ multiplicador: i, resultado: num1 * i });
    }
  }
}