import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit: number = 10, suffix: string = " ..."): string {
    return value.length > limit ? value.substring(0, limit - suffix.length) + suffix : value;
  }

}
