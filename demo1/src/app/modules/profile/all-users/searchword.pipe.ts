import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchword',
  pure:false
})
export class SearchwordPipe implements PipeTransform {

  transform(value:any,searchItem:any): any {
    return value.filter(function(text:any){
      return text.name.toUpperCase().indexOf(searchItem.toUpperCase())>-1

    })
  }

}
