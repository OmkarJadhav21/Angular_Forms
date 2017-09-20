import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(value: string[], arg?: string): any {
    if (arg) {
      let filtered = [];
      value.forEach(mob => {
        if (mob.charAt(0) === arg) {
          filtered.push(mob);
        }
      });
      return filtered;
    }
    return value;
  }
}