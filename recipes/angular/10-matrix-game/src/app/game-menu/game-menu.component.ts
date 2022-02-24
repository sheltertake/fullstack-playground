import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game-menu',
  templateUrl: './game-menu.component.html',
  styleUrls: ['./game-menu.component.scss']
})
export class GameMenuComponent implements OnInit {
start= true;
size:number=2;

startGame(){

  this.router.navigate(['/game',this.size])
}
  constructor( private router: Router) { }

  ngOnInit(): void {
  }

}
