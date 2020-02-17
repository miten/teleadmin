import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateSort'
})
export class DatesortPipe implements PipeTransform {
  transform(items: object[]): object[] {
    return items.sort((a: any, b: any) =>
      new Date(b.date).getTime() - new Date(a.date).getTime());
  }
}
