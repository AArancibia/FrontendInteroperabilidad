import {AfterViewInit, Directive, ElementRef, NgZone} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements AfterViewInit {

  constructor(private zone:NgZone, private elemento:ElementRef) {

  }
  ngAfterViewInit(){
    this.zone.runOutsideAngular(()=>{
      $(this.elemento.nativeElement).dropdown();

    });

  }

}
