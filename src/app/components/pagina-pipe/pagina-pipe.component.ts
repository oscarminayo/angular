import { Component, OnInit } from '@angular/core';
import { toBase64String } from '@angular/compiler/src/output/source_map';

@Component({
  selector: 'app-pagina-pipe',
  templateUrl: './pagina-pipe.component.html',
  styleUrls: ['./pagina-pipe.component.scss']
})
export class PaginaPipeComponent implements OnInit {

  nombre: string;
  numero: number;
  frase:string;

  constructor() { 
    console.trace('PaginaPipeComponent constructor');
    this.nombre = 'MaNoLitO GAfoTAS';
    this.numero = 3.141678;
    this.frase = '     Super       califragilistico espialidoso    ';
  }

  ngOnInit() {
    
    console.trace('PaginaPipeComponent constructor');
  }

}
