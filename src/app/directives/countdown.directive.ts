import { Directive, Input, SimpleChanges, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCountdown]'
})
export class CountdownDirective {

  @Input() appCountdown: number;

  constructor(
    private element: ElementRef
  ) { 
    console.trace('CountdownDirective constructor');
  }

  ngOnChanges(changes: SimpleChanges){
    if(changes.appCountdown){
      console.debug('input currentValue %o ' , changes.appCountdown );
      let valorActual = changes.appCountdown.currentValue;
      if ( valorActual <= 3 ){
        this.element.nativeElement.style.color = 'red';
      }else if ( valorActual <= 5 ){
        this.element.nativeElement.style.color = 'yellow';
      }else{
        this.element.nativeElement.style.color = 'green';
      } 
    } // changes
  }// ngOnChanges

}