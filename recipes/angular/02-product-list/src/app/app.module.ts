import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from 'src/welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductListModule } from 'src/product-list/product-list.module';




@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent],
  imports: [
    BrowserModule,ProductListModule,FontAwesomeModule,HttpClientModule,RouterModule.forRoot([

      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome',pathMatch:'full'},
      {path: '**', redirectTo: 'welcome',pathMatch:'full'},

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
