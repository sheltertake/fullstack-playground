import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ignoreElements, throwError } from 'rxjs';

type Cell = boolean | null;

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.scss'],
})
export class MatrixComponent implements OnInit, OnChanges {
  @Input() x = 0;
  @Input() y = 0;
  buttonBack: string = 'white';

  matrix: Cell[][] = [
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
  ];

  constructor() {}

  ngOnInit(): void {
    console.log(this.matrix.length);

    this.matrix[this.y][this.x] = true;
for(let i=0;i<3;i++){
    this.matrix[this.randomObstacle()][this.randomObstacle()] = null;}
  }

  randomObstacle() {
    return Math.floor(Math.random() * this.matrix.length);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('d');
  }

  goRight(): void {
    if (this.x < this.matrix.length - 1) {
      this.x++;
      if (this.matrix[this.y][this.x] == null) {
        this.findObstacle();
        this.x--;
        return;
      }
      this.matrix[this.y][this.x - 1] = false;
      this.matrix[this.y][this.x] = true;
    } else {
      this.matrix[this.y][this.x] = false;
      this.x = 0;
      this.matrix[this.y][this.x] = true;
      this.outOfTemplate();
  
    }
  }
  goLeft(): void {
    if (this.x > 0) {
      this.x--;
      if (this.matrix[this.y][this.x] == null) {
        this.findObstacle();
        this.x++;
        return;
      }
      this.matrix[this.y][this.x + 1] = false;
      this.matrix[this.y][this.x] = true;
    } else {
      this.matrix[this.y][this.x] = false;
      this.x= this.matrix.length-1;
      this.matrix[this.y][this.x] = true;
      this.outOfTemplate();
      
    }
  }
  goUp(): void {
    if (this.y > 0) {
      this.y--;
      if (this.matrix[this.y][this.x] == null) {
        this.findObstacle();
        this.y++;
        return;
      }
      this.matrix[this.y + 1][this.x] = false;
      this.matrix[this.y][this.x] = true;
    } else {
      this.matrix[this.y][this.x] = false;
      this.y= this.matrix.length-1;
      this.matrix[this.y][this.x] = true;
      this.outOfTemplate();
    }
  }
  goDown(): void {
    if (this.y < this.matrix.length - 1) {
      this.y++;
      if (this.matrix[this.y][this.x] == null) {
        this.findObstacle();
        this.y--;
        return;
      }
      this.matrix[this.y - 1][this.x] = false;
      this.matrix[this.y][this.x] = true;
    } else {
      this.matrix[this.y][this.x] = false;
      this.y= 0;
      this.matrix[this.y][this.x] = true;
      this.outOfTemplate();
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
