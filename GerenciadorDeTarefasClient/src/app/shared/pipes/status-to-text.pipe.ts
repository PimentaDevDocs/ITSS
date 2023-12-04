import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'statusToText',
  standalone: true
})
export class StatusToTextPipe implements PipeTransform {
  transform(value: boolean): string {
    return value ? 'Concluída' : 'Pendente';
  }
}
