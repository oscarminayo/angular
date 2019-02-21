import { Component, OnInit } from '@angular/core';
import { Fruta } from 'src/app/model/fruta';
import { FrutaService } from 'src/app/providers/fruta.service';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/providers/persona.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonasComponent implements OnInit {

  personas: Persona[];

  constructor(private personaService: PersonaService) {
    console.trace('PaginaServiceComponent constructor'); 
    this.personas = [];
    
  }

  ngOnInit() {
    console.trace('PaginaServiceComponent ngOnInit');
    //realizar llamada Servicio
    this.personaService.getAll().subscribe(json2 =>{
      console.debug("recibimos datos json2 %o", json2);
      let info = json2['info'];
      let personasJson = json2['results'];

      //TODO Map de personasJson

      this.personas = personasJson.map(p => {
        let nombre = p['name']['first'];
        let apellido = p['name']['last'];
        let imagen = p['picture']['large'];
        let email = p['email'];
        return new Persona(nombre, apellido, email, imagen);
      })

    })
  }

}
