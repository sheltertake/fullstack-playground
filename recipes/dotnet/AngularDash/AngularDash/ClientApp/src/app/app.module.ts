import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProdComponent } from '../prod/prod.component';
import { DashComponent } from '../dash/dash.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { GoldComponent } from '../gold/gold.component';
import { StagingComponent } from '../staging/staging.component';
import { DevelopComponent } from '../develop/develop.component';
import { FullComponent } from '../full/full.component';
import { ErrorComponent } from '../error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    ToolbarComponent,
    ProdComponent,
    GoldComponent,
    StagingComponent,
    DevelopComponent,
    FullComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

