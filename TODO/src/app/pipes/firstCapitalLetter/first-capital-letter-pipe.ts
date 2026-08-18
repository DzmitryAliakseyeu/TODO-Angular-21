import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstCapitalLetter',
})
export class FirstCapitalLetterPipe implements PipeTransform {

  transform(value: string): string | null {
    return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
  }

}
