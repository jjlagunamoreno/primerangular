import { Component } from "@angular/core";

//UN COMPONENTE TENDRÁ UNA DECLARACIÓN DE SU CONTENIDO
@Component({
    //DEBEMOS DE DECLARAR EL NOMBRE DEL COMPONENT
    //EN ANGULAR, SE SUELEN LLAMAR MEDANTE GUION
    selector: "primer-component",
    //COMO NO VAMOS A TENER HTML (VISTA) COMO TEMPLATE
    //VAMOS A ESCRIBIR DIRECTAMENTE EL CÓDIGO HTML AQUI
    // template: `
    //     <h1>Soy el primer component de Angular</h1>
    //     <h2 style="color:blue;">
    //     {{titulo}},{{descripcion}},{{anyo}}
    //     </h2>
    // `
    templateUrl: "./primer.component.html",
    styleUrls: ["./primer.component.css"]
})

//TODO COMPONENT DEBE SER DECLARADDO COMO UNA CLASE
//DICHO NOMBRE DE CLASE SE UTILIZARA DENTRO DE app.module.ts
export class PrimerComponent {
    //AQUI DECLARAMOS LAS VARIABLES QUE DESEEMOS
    //DICHAS VARIABLES SON CON TIPADO
    public titulo: string;
    public descripcion: string;
    public anyo: number;
    //EN ANGULAR TENEMOS UN CONSTRUCTOR PARA INICIAR LAS VARIABLES
    //O RECUPERARLAS DE ALGÚN SITIO
    constructor() {
        this.titulo = "Hoy es miercoles";
        this.descripcion = "Hoy no llueve";
        this.anyo = 2024;
    }
}