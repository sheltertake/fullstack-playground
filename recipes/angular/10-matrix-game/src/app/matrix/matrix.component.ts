import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';

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
        audio.volume = 0.5;
        audio.play();
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
    this.matrix[this.y][this.x] = true;
    for (let i = 0; i < this.enemies; i++) {
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

  chekMatrix(): number {
    let i = 0;
    let counter = 0;
    while (i < this.matrix.length) {
      let j = 0;
      while (j < this.matrix.length) {
        if (this.matrix[i][j] === null) {
          counter++;
        }
        j++;
      }
      i++;
    }
    return counter;
  }

  setEnemy(x: number, y: number) {
    this.randX = x;
    this.randY = y;
    this.matrix[x][y] = null;
  }
  moveEnemy(caller: string) {


    this.enemies = this.chekMatrix();
    if(this.chekMatrix() === 0)
    {
      alert('Winner');
    }



    console.log('move');
    if (caller === 'right') {
      if (
        this.matrix[this.y][this.x + 1] === null &&
        this.x + 2 <= this.matrix.length
      ) {
        this.matrix[this.y][this.x + 1] = false;

        if (this.y === this.matrix.length - 1) {
          console.log('dfgd');
        } else {
          this.matrix[this.y + 1][this.x + 1] = null;
        }
      }
    } else {
    }

    if (caller === 'left') {
      if (this.matrix[this.y][this.x - 1] === null && this.x - 2 <= 0) {
        this.matrix[this.y][this.x - 1] = false;
        console.log('x' + this.x);

        if (this.y === this.matrix.length - 1) {
          console.log('dfgd');
        } else {
          this.matrix[this.y + 1][this.x - 1] = null;
        }
      }
    } else {
    }

    if (caller === 'down') {
      // this.matrix[this.y-8][this.x]=true;
      console.log('y' + this.y);
      if(this.y === this.matrix.length-1){
        return;
      }

        if (this.matrix[this.y + 1][this.x] === null) {
          this.matrix[this.y + 1][this.x] = false;

          if(this.x===this.matrix.length-1){

          } else {
            this.matrix[this.y + 1][this.x + 1] = null;
          }

        }

    } else {
    }

    if (caller === 'up') {
      // this.matrix[this.y+8][this.x]=true;
      console.log('y' + this.y);
if(this.y === 0){
  return;
}
        if (this.matrix[this.y - 1][this.x] === null) {
          this.matrix[this.y - 1][this.x] = false;
          this.matrix[this.y - 1][this.x - 1] = null;
        }

    } else {
    }

    // for (let i = 0; i < this.matrix.length; i++) {

    //   for (let j = 0; j < this.matrix.length; j++) {
    //     if (this.matrix[i][j] === null) {

    //       if ( this.matrix[i + 1][j] === null && i + 1 != this.matrix.length - 1) {
    //         this.matrix[i][j] = false;
    //        this.matrix[i+1][j] = null;
    //        return;
    //       } else {
    //         console.log("niente");

    //       }
    //     }
    //   }
    // }

    // var elems = document.querySelectorAll<HTMLElement>('.null-card');
    // var index = 0,
    //   length = elems.length;
    // for (; index < length; index++) {
    //   const element = elems[index];
    //   console.log(element);
    // }
    // let i = 0;
    // while (i < this.matrix.length - 1) {
    //   let j = 0;
    //   while (j < this.matrix.length - 1) {
    //     // let randomMov = this.randomMove();
    //     if(this.chekMatrix()<this.enemies){
    //     }
    // this.matrix[i][j] = false;
    // switch (randomMov) {
    //   case 0:
    //     console.log('0');
    //     if (this.matrix[i][j] === null) {
    //       if (i + 1 < this.matrix.length-1 && this.matrix[0][j] === false) {
    //         this.matrix[i][j] = false;
    //         this.matrix[0][j] = null;
    //         return;
    //       }
    //       this.matrix[i][j] = false;
    //       this.matrix[i + 1][j] = null;
    //       return;
    //     }
    //     break;
    //   case 1:
    //     if (this.matrix[i][j] === null) {
    //       if (i + 1 < this.matrix.length-1 && this.matrix[0][j] === false) {
    //         this.matrix[i][j] = false;
    //         this.matrix[0][j] = null;
    //         return;
    //       }
    //       this.matrix[i][j] = false;
    //       this.matrix[i + 1][j] = null;
    //       return;
    //     }
    //     console.log('1');
    //     break;
    //   case 2:
    //     if (this.matrix[i][j] === null) {
    //       if (i + 1 < this.matrix.length-1 && this.matrix[0][j] === false) {
    //         this.matrix[i][j] = false;
    //         this.matrix[0][j] = null;
    //         return;
    //       }
    //       this.matrix[i][j] = false;
    //       this.matrix[i + 1][j] = null;
    //       return;
    //     }
    //     console.log('2');
    //     break;
    //   case 3:
    //     console.log('3');
    //     if (this.matrix[i][j] === null) {
    //       if (i + 1 < this.matrix.length-1 && this.matrix[0][j] === false) {
    //         this.matrix[i][j] = false;
    //         this.matrix[0][j] = null;
    //         return;
    //       }
    //       this.matrix[i][j] = false;
    //       this.matrix[i + 1][j] = null;
    //       return;
    //     }
    //     break;
    // }
    //   j++;
    // }
    // i++;
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
    this.moveEnemy('right');
    this.enemies = this.chekMatrix();
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
    this.moveEnemy('left');
    this.enemies = this.chekMatrix();
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
    this.moveEnemy('up');
    setTimeout(() => {
      this.upImg('up');
    }, 50);

    this.enemies = this.chekMatrix();
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
    this.moveEnemy('down');
    this.enemies = this.chekMatrix();
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
