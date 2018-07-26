import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookImageUrl'
})
export class BookImageUrlPipe implements PipeTransform {

  transform(value: string): string {
    return `/assets/images/books/${value}.jpg`;
  }

}
