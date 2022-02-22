import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

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

  constructor() {
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
    this.start = true;
    console.log(this.size);

    this.matrix = this.buildMatrix(this.size);
    this.matrix[0][0] = true;
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

  public getClass(a: number, b: number): string {
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

    if (this.getClass(this.y, this.x) === 'card'|| this.getClass(this.y, this.x) === 'card-down' || this.getClass(this.y, this.x) === 'card-up'|| this.getClass(this.y, this.x) === 'card-left') {
      this.pacman = document.querySelector(this.getClass(this.y, this.x))

      // this.pacman.className = 'card-right';
        console.log(this.pacman);

    }
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

    if (this.getClass(this.y, this.x) === '.card'|| this.getClass(this.y, this.x) === '.card-right' || this.getClass(this.y, this.x) === '.card-up'|| this.getClass(this.y, this.x) === '.card-down') {
      this.pacman = document.querySelector(this.getClass(this.y, this.x))
      if (this.pacman) {
        this.pacman.className = '.card-left';
      }
    }
    if (this.x > 0) {
      if (this.matrix[this.y][this.x - 1] == null) {
        this.findObstacle();
        this.matrix[this.y][this.x] = false;
        this.x--;
        this.matrix[this.y][this.x] = true;
        return;
      }
      this.matrix[this.y][this.x] = false;
      this.x--;
      this.matrix[this.y][this.x] = true;
    } else {
      this.matrix[this.y][this.x] = false;
      this.x = this.matrix.length - 1;
      this.matrix[this.y][this.x] = true;
      this.outOfTemplate();
    }
  }
  goUp(): void {

    if (this.getClass(this.y, this.x) === '.card'|| this.getClass(this.y, this.x) === '.card-right' || this.getClass(this.y, this.x) === '.card-left'|| this.getClass(this.y, this.x) === '.card-down') {
      this.pacman = document.querySelector(this.getClass(this.y, this.x))
      if (this.pacman) {
        this.pacman.className = '.card-up';
      }
    }
    if (this.y > 0) {
      if (this.matrix[this.y - 1][this.x] == null) {
        this.findObstacle();
        this.matrix[this.y][this.x] = false;
        this.y--;
        this.matrix[this.y][this.x] = true;
        return;
      }
      this.matrix[this.y][this.x] = false;
      this.y--;
      this.matrix[this.y][this.x] = true;
    } else {
      this.matrix[this.y][this.x] = false;
      this.y = this.matrix.length - 1;
      this.matrix[this.y][this.x] = true;
      this.outOfTemplate();
    }
  }
  goDown() {
    if (this.getClass(this.y, this.x) === '.card'|| this.getClass(this.y, this.x) === '.card-right' || this.getClass(this.y, this.x) === '.card-up'|| this.getClass(this.y, this.x) === '.card-left') {
      this.pacman = document.querySelector(this.getClass(this.y, this.x))
      if (this.pacman) {
        this.pacman.className = '.card-down';
      }
    }
    if (this.y < this.matrix.length - 1) {
      if (this.matrix[this.y][this.x] == null) {
        this.findObstacle();
        this.matrix[this.y][this.x] = false;
        this.y++;
        this.matrix[this.y][this.x] = true;
        return;
      }
      this.matrix[this.y][this.x] = false;
      this.y++;
      this.matrix[this.y][this.x] = true;
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

  findPacman() {
    let p =(document.getElementsByClassName('.false-card'));
   console.log(p);


  }
}
