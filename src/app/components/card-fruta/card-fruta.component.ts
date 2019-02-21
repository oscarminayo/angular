import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-fruta',
  templateUrl: './card-fruta.component.html',
  styleUrls: ['./card-fruta.component.scss']
})
export class CardFrutaComponent implements OnInit {

 
  @Input('fruta') fruta: any;
  @Input('frutaComparar') frutaComparar: any;

  @Output() llamarCarrito = new EventEmitter();

  constructor() { 

    
  }

  ngOnInit() {
  }

  clickEnlace(event){

    this.llamarCarrito.emit(this.fruta);
  }

 
}
