import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  endpoint = 'https://randomuser.me/api/?results=10';

  constructor(private httpClient: HttpClient) {
    console.debug('PersonaService constructor');
   }

   public getAll() {
    console.trace('getAll' + this.endpoint);
    return this.httpClient.get(this.endpoint);
   }
}
