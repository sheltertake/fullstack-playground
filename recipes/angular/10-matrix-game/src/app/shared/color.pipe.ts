import { NgStyle } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

type Cell = boolean | null;

@Pipe({
  name: 'color',
})
export class ColorPipe implements PipeTransform {

  transform(col: Cell): string {

    if(col===false){

      // let elem = Array.from(document.getElementsByClassName('false-card') as HTMLCollectionOf<HTMLElement>)
      // for (let i = 0; i < elem.length; i++) {
      //   const element = elem[i];
      //   element.style.backgroundColor="red"
      // }
      // let elem2 = Array.from(document.getElementsByClassName('card') as HTMLCollectionOf<HTMLElement>)
      // for (let i = 0; i < elem2.length; i++) {
      //   const element = elem2[i];
      //   element.style.backgroundColor="green"
      // }
      // let elem3 = Array.from(document.getElementsByClassName('card') as HTMLCollectionOf<HTMLElement>)
      // for (let i = 0; i < elem3.length; i++) {
      //   const element = elem3[i];
      //   element.style.backgroundColor="white"
      // }

    return '';
    }else if(col===true) {

      return '';
    } else {
      return ''
    }



  }
}
