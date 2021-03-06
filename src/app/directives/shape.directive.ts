import {AfterViewInit, Directive, ElementRef, NgZone} from '@angular/core';

@Directive({
  selector: '[appShape]'
})
export class ShapeDirective implements AfterViewInit{

  constructor(private zone:NgZone, private elemento:ElementRef) { }

  ngAfterViewInit(){

    this.zone.runOutsideAngular(()=>{
      $(this.elemento.nativeElement.currentTarget).shape();
      console.log($(this.elemento.nativeElement.currentTarget),this.elemento.nativeElement);

      // $('.shape').shape('repaint');
    });
  }


}
