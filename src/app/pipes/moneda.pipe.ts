import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moneda'
})
export class MonedaPipe implements PipeTransform {

  //args? donde pone locale, ? significa opcional
  /**
   * transforma un numero añadiendo al final el simbolo de la moneda
   * @param numero : number numero a transformar
   * @param locale : string por defecto 'eu', cambiamos 'eu''' => '€' o por ejemplo 'us' => '$'
   */
  transform(numero: number, locale: string = 'eu'): string { // la ? significa que es opcional, no obligatorio el argumento.
    let simbolo = '€';

    if(locale === 'eu'){
      simbolo = '€';
    }else if (locale === 'us'){
      simbolo = '$';
    }
    return numero + ' ' + simbolo;
  }

}
