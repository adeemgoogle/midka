import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]' 
})
export class HoverHighlightDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    
    this.renderer.setStyle(this.el.nativeElement, 'border', '1px solid #007bff');
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', '3px 3px 5px #ccc');
  }

  @HostListener('mouseleave') onMouseLeave() {
   
    this.renderer.removeStyle(this.el.nativeElement, 'border');
    this.renderer.removeStyle(this.el.nativeElement, 'box-shadow');
  }
}
