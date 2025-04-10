import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]' 
})
export class HighlightDirective {

  @Input() set appHighlight(shouldHighlight: boolean) {
    if (shouldHighlight) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'yellow');
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'background-color');
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}
}
