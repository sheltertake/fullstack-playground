import { NgStyle } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

type Cell = boolean | null;

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(col: Cell): unknown {  
if(col){
//  let c = document.getElementsByClassName('col');
//   c.style
}
   
    return null;
  }

}
