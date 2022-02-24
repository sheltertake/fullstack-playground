import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

type Cell = boolean | null;

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.scss'],
})
export class MatrixComponent implements OnInit {
  private ctx!: AudioContext;

  @Input() x = 0;
  @Input() y = 0;
  state: boolean = true;
  randX: number = 0;
  randY: number = 0;
  size: number = 2;
  enemies: number = 1;
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

  constructor(private route: ActivatedRoute) {
    let routerRes = this.route.snapshot.paramMap.get('size');

    if (routerRes) {
      let s = parseInt(routerRes);
      console.log(s);
      this.size = s;
      this.enemies = s;
    }

    this.matrix = Array(this.size)
      .fill(false)
      .map(() => Array(this.size).fill(false));
  }

  ngOnInit(): void {
    AudioContext =
      (window as any).AudioContext || (window as any).webkitAudioContext;
    this.ctx = new AudioContext();

    window.addEventListener('DOMContentLoaded', (event) => {
      let audio = document.querySelector('audio');
      if (audio) {
        audio.volume = 0.2;
        audio.play().then((c) => {});
      }
    });
  }

  buildMatrix(): Cell[][] {
    let matrix = Array(this.size)
      .fill(false)
      .map(() => Array(this.size).fill(false));

    return matrix;
  }

  startGame() {
    this.x = 0;
    this.y = 0;
    this.start = true;

    this.enemies = this.size;
    this.matrix = this.buildMatrix();
    this.matrix[this.x][this.y] = true;
    for (let i = 0; i < 3; i++) {
      this.randX = this.randomObstacle();
      this.randY = this.randomObstacle();

      while (
        (this.randX == 0 && this.randY == 0) ||
        this.matrix[this.randX][this.randY] != false
      ) {
        this.randX = this.randomObstacle();
        this.randY = this.randomObstacle();
      }
      this.setEnemy(this.randX, this.randY);
      console.log('X: ' + this.randX + '  Y:  ' + this.randY);
    }
  }

  setEnemy(x: number, y: number) {
    this.randX = x;
    this.randY = y;
    this.matrix[x][y] = null;
  }
  moveEnemy(x: number, y: number) {
    // var elems = document.querySelectorAll<HTMLElement>('.null-card');

    // var index = 0,
    //   length = elems.length;
    // for (; index < length; index++) {
    //   const element = elems[index];
    //   console.log(element);

    // }
    let i = 0;
    let randomMov = this.randomMove();
    while (i < this.matrix.length - 1) {
      let j = 0;
      while (j < this.matrix.length - 1) {
        switch (randomMov) {
          case 0:
            console.log('0');
            if (this.matrix[i][j] === null && this.matrix[i + 1][j] != true) {
              if (i + 1 < this.matrix.length && this.matrix[0][j] === false) {
                this.matrix[i][j] = false;
                this.matrix[0][j] = null;
              }

              this.matrix[i][j] = false;
              this.matrix[i + 1][j] = null;
              return;
            } else {
            }

            break;
          case 1:
            if (
              this.matrix[i][j] === null &&
              this.matrix[i + 1][j + 1] != true
            ) {
              if (
                i + 1 < this.matrix.length &&
                j + 1 < this.matrix.length - 1 &&
                this.matrix[0][this.matrix.length - 1] === false
              ) {
                this.matrix[i][j] = false;
                this.matrix[0][this.matrix.length - 1] = null;
              }
              this.matrix[i][j] = false;
              this.matrix[i + 1][j + 1] = null;
              return;
            } else {
            }
            console.log('1');
            break;
          case 2:
            if (this.matrix[i][j] === null && this.matrix[i][j + 1] != true) {
              if (
                j + 1 < this.matrix.length &&
                this.matrix[i][this.matrix.length] === false
              ) {
                this.matrix[i][j] = false;
                this.matrix[i][this.matrix.length] = null;
              }
              this.matrix[i][j] = false;
              this.matrix[i][j + 1] = null;
              return;
            } else {
            }
            console.log('2');

            break;
          case 3:
            console.log('3');
            if (this.matrix[i][j] === null && this.matrix[i + 2][j] != true) {
              if (
                i + 2 > this.matrix.length &&
                this.matrix[this.matrix.length][j] === false
              ) {
                this.matrix[i][j] = false;
                this.matrix[this.matrix.length][j] = null;
              }
              this.matrix[i][j] = false;
              this.matrix[i + 2][j] = null;
              return;
            } else {
            }
            break;
        }

        j++;
      }
      i++;
    }
    // if (x+2<this.matrix.length-1 && this.matrix[x + 2][y] === null) {
    //   this.matrix[x + 2][y] = false;

    //   if (x+3<this.matrix.length-1 && this.matrix[x + 3][y] != null) {
    //     this.matrix[x + 3][y] = null;
    //     console.log('ok');
    //   } else {
    //     console.log('d');
    //   }
    // } else {
    //   console.log("fff");

    // }
  }
  randomMove(): number {
    return Math.floor(Math.random() * 4);
  }
  randomObstacle() {
    return Math.floor(Math.random() * this.size);
  }
  upImg(caller: string) {
    var elems = document.querySelectorAll<HTMLElement>(
      '.card, .left-card, .right-card, .down-card, .up-card'
    );

    var index = 0,
      length = elems.length;
    for (; index < length; index++) {
      const element = elems[index];
      if (caller === 'right') {
        element.className = 'right-card';
        return;
      } else if (caller === 'left') {
        element.className = 'left-card';
        return;
      } else if (caller === 'up') {
        element.className = 'up-card';
        return;
      } else if (caller === 'down') {
        element.className = 'down-card';
        return;
      }
    }
  }
  goRight(): void {
    this.upImg('right');
    this.moveEnemy(this.x, this.y);
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
    this.upImg('left');
    this.moveEnemy(this.x, this.y);
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

  goUp(): void {
    setTimeout(() => {
      this.upImg('up');
    }, 50);
    this.moveEnemy(this.x, this.y);
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
      this.upImg('down');
    }, 50);
    this.moveEnemy(this.x, this.y);
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
    setTimeout(() => {}, 1000);
  }

  findObstacle() {
    console.log('Obstacle found');
    this.play();
    if (this.enemies == 1) {
      alert('Winner!');
    }
    this.enemies--;
  }

  play() {
    let osc = this.ctx.createOscillator();
    osc.onended = () => osc.disconnect();
    osc.connect(this.ctx.destination);
    osc.frequency.value = 200;
    osc.detune.value = 2000;
    osc.start();
    osc.stop(this.ctx.currentTime + 0.2);
  }
}
