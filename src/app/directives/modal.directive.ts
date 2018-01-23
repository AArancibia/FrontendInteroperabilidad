import {AfterViewInit, Directive, ElementRef, NgZone} from '@angular/core';

@Directive({
  selector: '[appModal]'
})
export class ModalDirective implements AfterViewInit  {

  constructor(private zone:NgZone, private elemento:ElementRef) { }
  ngAfterViewInit() {
      this.zone.runOutsideAngular(() => {
        $(this.elemento.nativeElement).modal();

      });
    }
}
