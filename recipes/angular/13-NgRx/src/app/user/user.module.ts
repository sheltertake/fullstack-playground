import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';


import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './login.component';

const userRoutes: Routes = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(userRoutes),
    // StoreModule.forFeature('login',loginReducer)
  ],
  declarations: [
    LoginComponent
  ]
})
export class UserModule { }
