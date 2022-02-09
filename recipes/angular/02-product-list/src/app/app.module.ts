import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from 'src/shared/convert-to-spaces.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StarComponent } from 'src/shared/star.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent, ConvertToSpacesPipe,StarComponent,
  ],
  imports: [
    BrowserModule, FormsModule,FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
