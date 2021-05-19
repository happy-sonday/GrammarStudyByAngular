import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lengthPipe',
})
export class LengthPipePipe implements PipeTransform {
  outStr: string;
  transform(input: string, limit: number, replacement: string) {
    if (input.length > limit) {
      this.outStr = input.substring(0, input.length + 1);
      return this.outStr + replacement;
    }
  }
}
