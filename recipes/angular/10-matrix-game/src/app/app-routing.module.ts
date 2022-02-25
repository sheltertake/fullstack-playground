import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatrixComponent } from './matrix/matrix.component';
import { GameMenuComponent } from './game-menu/game-menu.component';

const routes: Routes = [
  {path: 'game/:size', component: MatrixComponent},
  {path: 'menu', component: GameMenuComponent},
  {path: '**', redirectTo: '/menu' },
  {path: ' ', redirectTo: '/menu' }
];

@NgModule({
  declarations: [],
  imports: [
RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MatrixComponent, GameMenuComponent]
