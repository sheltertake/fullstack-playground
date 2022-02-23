import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

type Cell = boolean | null;

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.scss'],
  animations: [
    trigger('myTrigger', [
      transition('void => *', [
        animate(200, keyframes([style({ transform: 'width:50px' })])),
      ]),

      // trigger('up', [
      //   transition('void => *',[ animate(500 ,keyframes([
      //     style({transform: 'rotate(45deg)'}),
      //     // style({transform: 'rotate(-45deg)'}),
      //   ]))

      // ]),
      // ]),
    ]),
  ],
})
export class MatrixComponent implements OnInit {
  @Input() x = 0;
  @Input() y = 0;

  buttonBack: string = 'white';
  state: boolean = true;
  randX: number = 0;
  randY: number = 0;
  size: number = 2;
  start: boolean = false;
  rotation: string = 'color:blu';
  matrix: Cell[][];
  res: string = '';
  pacman: any;

  //   [false, false, false, false, false, false, false, false, false, false],
  //   [false, false, false, false, false, false, false, false, false, false],
  //   [false, false, false, false, false, false, false, false, false, false],
  //   [false, false, false, false, false, false, false, false, false, false],
  //   [false, false, false, false, false, false, false, false, false, false],
  //   [false, false, false, false, false, false, false, false, false, false],
  //   [false, false, false, false, false, false, false, false, false, false],
  //   [false, false, false, false, false, false, false, false, false, false],
  //   [false, false, false, false, false, false, false, false, false, false],
  //   [false, false, false, false, false, false, false, false, false, false],
  //   [false, false, false, false, false, false, false, false, false, false],
  // ];

  constructor(private elref: ElementRef) {
    this.matrix = Array(this.size)
      .fill(false)
      .map(() => Array(this.size).fill(false));
  }

  buildMatrix(size: number): Cell[][] {
    let matrix = Array(size)
      .fill(false)
      .map(() => Array(size).fill(false));

    return matrix;
  }

  startGame() {
    this.x = 0;
    this.y = 0;
    this.start = true;
    console.log(this.size);

    this.matrix = this.buildMatrix(this.size);
    this.matrix[this.x][this.y] = true;
    for (let i = 0; i < this.size; i++) {
      this.randX = this.randomObstacle();
      this.randY = this.randomObstacle();
      console.log('x: ' + this.randX + 'y. ' + this.randY);
      while (this.randX == 0 && this.randY == 0) {
        this.randX++;
        this.randY++;
      }
      this.matrix[this.randX][this.randY] = null;
    }
  }

  getClass(a: number, b: number): string {
    if (this.matrix[a][b] === true) {
      this.res = 'card';
    } else if (this.matrix[a][b] === false) {
      this.res = 'false-card';
    } else if (this.matrix[a][b] == null) {
      this.res = 'null-card';
    }
    console.log(this.res);
    return this.res;
  }

  ngOnInit(): void {}

  randomObstacle() {
    return Math.floor(Math.random() * this.size);
  }

  goRight(): void {
    // let elem = Array.from(
    //   document.getElementsByClassName('card') as HTMLCollectionOf<HTMLElement>
    // );
    // for (let i = 0; i < elem.length; i++) {
    //   const element = elem[i];
    //   element.style.backgroundImage = "url('p-right.png')";
    // }
    this.upImg('right');
    if (this.x < this.matrix.length - 1) {
      if (this.matrix[this.y][this.x + 1] === null) {
        this.findObstacle();
        this.matrix[this.y][this.x] = false;
        this.x++;
        this.matrix[this.y][this.x] = true;
      } else {
        this.matrix[this.y][this.x] = false;
        this.x++;
        this.matrix[this.y][this.x] = true;
      }
    } else {
      this.matrix[this.y][this.x] = false;
      this.x = 0;
      this.matrix[this.y][this.x] = true;
      this.outOfTemplate();
    }
  }
  goLeft(): void {
    // let elem = Array.from(
    //   document.getElementsByClassName('card') as HTMLCollectionOf<HTMLElement>
    // );
    // for (let i = 0; i < elem.length; i++) {
    //   const element = elem[i];

    //   element.style.backgroundImage = "url('p-left.png')";
    // }
    this.upImg('left');
    if (this.x > 0) {
      if (this.matrix[this.y][this.x - 1] == null) {
        this.findObstacle();
        this.matrix[this.y][this.x] = false;
        this.x--;
        this.matrix[this.y][this.x] = true;
      } else {
        this.matrix[this.y][this.x] = false;
        this.x--;
        this.matrix[this.y][this.x] = true;
      }
    } else {
      this.matrix[this.y][this.x] = false;
      this.x = this.matrix.length - 1;
      this.matrix[this.y][this.x] = true;
      this.outOfTemplate();
    }
  }

  upImg(caller: string) {
    let elem = Array.from(
      document.getElementsByClassName('card') as HTMLCollectionOf<HTMLElement>
    );
    console.log(elem);
    for (let i = 0; i < elem.length; i++) {
      const element = elem[i];
      if (caller === 'right') {
        element.style.backgroundColor='red';
      } else if (caller === 'left') {
        element.style.backgroundColor='green';
      }
    }
  }
  upImg1(caller: string) {
    let elem = Array.from(
      document.getElementsByClassName('card') as HTMLCollectionOf<HTMLElement>
    );
    console.log(elem);
    for (let i = 0; i < elem.length; i++) {
      const element = elem[i];
      if (caller === 'up') {
        // element.style.backgroundImage = "p-up.png";
        // element.style.backgroundColor='grey';
        element.className="left-card"
      } else if (caller === 'down') {
        element.style.backgroundColor='blue';
      }
    }
  }
  goUp(): void {
    setTimeout(() => {
      this.upImg1('up');
    }, 100);

    if (this.y > 0) {
      if (this.matrix[this.y - 1][this.x] === null) {
        this.findObstacle();
        this.matrix[this.y][this.x] = false;
        this.y--;
        this.matrix[this.y][this.x] = true;
      } else {
        this.matrix[this.y][this.x] = false;
        this.y--;
        this.matrix[this.y][this.x] = true;
      }
    } else {
      this.matrix[this.y][this.x] = false;
      this.y = this.matrix.length - 1;
      this.matrix[this.y][this.x] = true;
      this.outOfTemplate();
    }
  }
  goDown(): void {
    setTimeout(() => {
      this.upImg1('down');
    }, 100);
    if (this.y < this.matrix.length - 1) {
      if (this.matrix[this.y + 1][this.x] === null) {
        this.findObstacle();
        this.matrix[this.y][this.x] = false;
        this.y++;
        this.matrix[this.y][this.x] = true;
      } else {
        this.matrix[this.y][this.x] = false;
        this.y++;
        this.matrix[this.y][this.x] = true;
      }
    } else {
      this.matrix[this.y][this.x] = false;
      this.y = 0;
      this.matrix[this.y][this.x] = true;
      this.outOfTemplate();
    }
  }

  checkKey(event: any) {
    event = event || window.event;

    if (event.keyCode == '38') {
      // up arrow
      this.goUp();
    } else if (event.keyCode == '40') {
      // down arrow
      this.goDown();
    } else if (event.keyCode == '37') {
      // left arrow
      this.goLeft();
    } else if (event.keyCode == '39') {
      // right arrow
      this.goRight();
    }
  }

  outOfTemplate() {
    this.buttonBack = 'red';
    setTimeout(() => {
      this.buttonBack = 'white';
    }, 1000);
  }

  findObstacle() {
    console.log('Obstacle found');
  }
}
