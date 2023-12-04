import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'prioridadeToText',
  standalone: true
})
export class PrioridadeToTextPipe implements PipeTransform {
  transform(value: number): string {
    switch (value) {
      case 0:
        return 'Alto';
      case 1:
        return 'Médio';
      case 2:
        return 'Baixo';
      default:
        return 'Baixo';
    }
  }
}
