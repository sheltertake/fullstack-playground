import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MatrixComponent } from './matrix/matrix.component';
import { ColorPipe } from './shared/color.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MatrixComponent,
    ColorPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
