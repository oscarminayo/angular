import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'espacios'
})
export class EspaciosPipe implements PipeTransform {

  transform(frase: string, args?: any): string {
    let fraseacortada;
    
    fraseacortada = frase.trim().split("  ").join("");
    return fraseacortada;
  }

}
