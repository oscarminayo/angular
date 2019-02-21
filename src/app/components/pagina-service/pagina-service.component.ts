import { Component, OnInit } from '@angular/core';
import { Fruta } from 'src/app/model/fruta';
import { FrutaService } from 'src/app/providers/fruta.service';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/providers/persona.service';

@Component({
  selector: 'app-pagina-service',
  templateUrl: './pagina-service.component.html',
  styleUrls: ['./pagina-service.component.scss']
})
export class PaginaServiceComponent implements OnInit {

  frutas: Fruta[];
  personas: Persona[];

  constructor(private frutaService: FrutaService, private personaService: PersonaService) {
    console.trace('PaginaServiceComponent constructor');
    this.frutas = [];
    this.personas = [];
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

    this.personaService.getAll().subscribe(json2 =>{
        console.debug("recibimos datos json2 %o", json2);
        let info = json2['info'];
        let personasJson = json2['results'];

        //TODO Map de personasJson

        this.personas = personasJson.map(p => {
          let nombre = p['name']['first'];
          let apellido = p['name']['last'];
          let imagen = p['picture']['large'];
          return new Persona(nombre, apellido, imagen);
        })

      })
    


  }

}
