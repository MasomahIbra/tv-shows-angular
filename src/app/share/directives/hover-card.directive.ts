import { Directive } from '@angular/core';
import { ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverCard]'
})
export class HoverCardDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setBorder("#F5F5F5");
    this.setOpacity("1")
   }
   
   setBorder(color: string): void{
    let style = 'solid 2px ' + color;
    this.renderer.setStyle(this.el.nativeElement, 'border', style);
  }

  setOpacity(opacity: string): void{
    this.renderer.setStyle(this.el.nativeElement, 'opacity', opacity);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder('#343a40');
    this.setOpacity("0.6");
  }

  @HostListener('mouseout') onMouseLeave() {
    this.setBorder('#F5F5F5');
    this.setOpacity("1");
  }
}
