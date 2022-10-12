import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: string, locale: string): string {
    if (locale === 'FR') {
      return value.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5');
    }
    else if (locale === 'US') {
      return value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    }
    else {
      return value;
    }
  }
}
