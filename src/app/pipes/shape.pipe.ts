import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shape'
})
export class ShapePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
