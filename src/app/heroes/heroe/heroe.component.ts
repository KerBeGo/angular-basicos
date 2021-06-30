import { Component } from '@angular/core';

@Component({
    selector: "app-heroes",
    templateUrl: "heroe.component.html"
})


export class HeroeComponent {
    nombre: string = "Iron-man";
    edad: number = 45

get nombreCapitalizado(){
    return this.nombre.toUpperCase();
}

    obtenerNombre(): string {
return `${this.nombre} - ${this.edad}`
    }

cambiarNombre(): void {
    this.nombre = "Spider-man";
}

cambiarEdad(): void {
    this.edad = 28
}

}