import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';

import { HangmanDisplayComponent } from '../components/hangman-display/hangman-display.component';
import { HangmanKeyboardComponent } from '../components/hangman-keyboard/hangman-keyboard.component';
import { HangmanQuestionComponent } from '../components/hangman-question/hangman-question.component';
import { HangmanComponent } from 'src/components/hangman/hangman.component';

@NgModule({
  declarations: [
    AppComponent,
    HangmanComponent,
    HangmanDisplayComponent,
    HangmanKeyboardComponent,
    HangmanQuestionComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
