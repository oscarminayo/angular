import { Component, OnInit } from '@angular/core';
import { Fruta } from 'src/app/model/fruta';
import { FrutaService } from 'src/app/providers/fruta.service';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/providers/persona.service';

@Component({
  selector: 'app-frutas',
  templateUrl: './frutas.component.html',
  styleUrls: ['./frutas.component.scss']
})
export class FrutasComponent implements OnInit {

  frutas: Fruta[];

  constructor(private frutaService: FrutaService) {
    console.trace('PaginaServiceComponent constructor');
    this.frutas = [];

   }

  ngOnInit() {
    console.trace('PaginaServiceComponent ngOnInit');
    //realizar llamada Servicio
    this.frutaService.getAll().subscribe(json => {
      console.debug("recibimos datos json %o", json);
      this.frutas = json.map(f => {
        return new Fruta(f.nombre, f.precio, f.id, f.oferta, f.descuento, f.imagen, 1);
      });
    });
  }

}
