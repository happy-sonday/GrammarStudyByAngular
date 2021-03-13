import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lengthPipe',
})
export class LengthPipePipe implements PipeTransform {
  outStr: string;
  transform(input: string, replacement: string) {
    if (input.length > 12) {
      this.outStr = input.substring(0, 11);
      return this.outStr + replacement;
    }
  }
}
