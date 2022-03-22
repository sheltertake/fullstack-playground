import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from 'src/dash/dash.component';
import { DevelopComponent } from 'src/develop/develop.component';
import { ErrorComponent } from 'src/error/error.component';
import { FullComponent } from 'src/full/full.component';
import { GoldComponent } from 'src/gold/gold.component';
import { ProdComponent } from 'src/prod/prod.component';
import { StagingComponent } from 'src/staging/staging.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'dash',  component: DashComponent},
  { path: 'prod', component: ProdComponent},
  { path: 'gold', component: GoldComponent},
  { path: 'staging', component: StagingComponent},
  { path: 'develop', component: DevelopComponent},
  { path: 'full', component: FullComponent},
  { path: 'error', component: ErrorComponent},
  { path: '', component: DashComponent},
  { path: '**', component: DashComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
