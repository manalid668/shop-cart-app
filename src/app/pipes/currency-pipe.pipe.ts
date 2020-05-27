import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyPipe'
})
export class CurrencyPipePipe implements PipeTransform {

  transform(value: number, args?: any[]): string {
    const currencySymbol = '₹';
    if (! isNaN(value)) {
      return currencySymbol + value;
    }
  }

}
