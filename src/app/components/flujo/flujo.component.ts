import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flujo',
  templateUrl: './flujo.component.html',
  styleUrls: ['./flujo.component.scss']
})
export class FlujoComponent implements OnInit {

  //dentro de la clase
  expresion: string;
  ocultar: boolean;
  claseModelo: string;
  nombre: string;

  constructor() { 
    console.trace('FlujoComponent constructor');
    //las inicializamos en el constructor
    this.expresion = 'soy una Variable inicializada en el modelo';
    this.ocultar = true;
    this.claseModelo = 'text-primary';
    this.nombre = 'Todavia no me lo has dicho';
  }

  ngOnInit() {
    console.trace('FlujoComponent ngOnInit');
  }

  changeClass(claseSeleccionada: string){
    console.trace('Click radio button');
    this.claseModelo = claseSeleccionada;
  }

  borrar(){
    this.nombre='';
  }

}
