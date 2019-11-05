import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.border = 'solid 1px blue';
 }

}
