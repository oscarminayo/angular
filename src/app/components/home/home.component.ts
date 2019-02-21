import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { Fruta } from 'src/app/model/fruta';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  manolo: Persona;
  sinNombre: Persona;

  idiomas: string[];
  idiomaSeleccionado: string;
  textoTraducir: string;

  frutaConstructor: Fruta;
  frutaConstructorDescuento: Fruta;
  frutaConstructorCompleto: Fruta;

  constructor() {
    
    this.frutaConstructor = new Fruta('fresa', 3.45);
    this.frutaConstructorDescuento = new Fruta('Tamarindo', 25.78, undefined, true, 25, undefined);
    this.frutaConstructorCompleto = new Fruta('Naranja', 5.13, 3, true, 5, 'https://comefruta.es/wp-content/uploads/naranjas-verano.jpg', 5);
    
    console.debug('frutaConstructor: %o', this.frutaConstructor);
    console.debug('frutaConstructorDescuento: %o', this.frutaConstructorDescuento);
    console.debug('frutaConstructorCompleto: %o', this.frutaConstructorCompleto);


    this.idiomas = ['eu','es','en'];
    this.idiomaSeleccionado = this.idiomas[0]; //eu
    this.textoTraducir = '';

 
 

    console.debug("manolo sin inicializar %o", this.manolo);

    this.manolo.nombre = 'Manolo';
  

    console.debug("Dame tu nombre " + this.manolo.nombre );


  }

  ngOnInit() {
  }


  cambiarIdioma( idioma: string){
    this.idiomaSeleccionado = idioma;
  }

  escucho(event){

    alert('Acabo recicbir evento del Hijo idioma=' + event.idioma + ' y texto=' + event.texto);
  }

}