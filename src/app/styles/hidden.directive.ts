import { Directive, ElementRef, Input, Renderer } from '@angular/core';
@Directive({ selector: '[hidden]' })

export class HiddenDirective {
    constructor(el: ElementRef, renderer: Renderer) {
       renderer.setElementStyle(el.nativeElement, 'display', 'none');
    }
}
