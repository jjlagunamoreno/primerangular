import { Component } from "@angular/core";
@Component({
    selector: "app-deportes",
    templateUrl: "./deportes.component.html",
    styleUrl: "./deportes.component.css",
})
export class DeportesComponent {
    public numeros: Array<number>;
    public sports: Array<string>;
    constructor() {
        this.numeros = [1, 5, 3, 7, 8, 8, 8, 8, 21, 11, 99]
        this.sports = ["Canicas", "Padel", "Petanca", "Curling", "Dardos"]
    }
}