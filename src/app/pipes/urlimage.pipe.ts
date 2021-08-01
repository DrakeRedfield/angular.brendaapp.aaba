import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlimage'
})
export class UrlimagePipe implements PipeTransform {

  transform( value: string): string {
    return 'url-temp';
  }

}
