import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-saludar',
  templateUrl: './saludar.component.html',
  styleUrls: ['./saludar.component.scss']
})
export class SaludarComponent implements OnInit {

  nombre;
  apellido;

  constructor(private route: ActivatedRoute) {
    this.nombre = 'Toreto';
    this.apellido = 'El Mascatuercas';
   }

  ngOnInit() {
    this.route.paramMap.subscribe( params =>{
      this.nombre = params.get('nombre');
      this.apellido = params.get('apellido');
    });

  }  

}
