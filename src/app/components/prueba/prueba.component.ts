import { Component, OnInit } from '@angular/core';
import { timeout } from 'q';

const TIEMPOJUEGO: number = 10;

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent implements OnInit {

  //variable tipo numerica
  contador: number;
  tiempo:number = 10;
  interval;

  constructor() { 
    console.trace('PruebaComponent constructor');
    
    //inicializar variables siempre en el constructor
    this.contador = 0;
    this.tiempo = TIEMPOJUEGO;
  }

  ngOnInit() {
    console.trace('PruebaComponent ngOnInit');
  }

  cronometro() {
    this.interval = setInterval(() => {
      if(this.tiempo > 0) {
        console.trace('restar');
        this.tiempo--;
      } else if(this.tiempo == 0) {
        console.trace('parar');
        clearInterval(this.interval);
        
      }
    },1000)
  }

  sumar(){
    console.trace('Click boton sumar');
      if(this.tiempo > 0 && this.tiempo<10){
        this.contador++;
      }
    
  }

  restart(){
    this.tiempo = TIEMPOJUEGO;
    this.contador = 0;
  }

}
