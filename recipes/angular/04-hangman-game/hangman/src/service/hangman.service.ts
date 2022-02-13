import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const defaultJSONPath = "assets/words.json";

@Injectable({
  providedIn: 'root'
})
export class HangmanService {

  constructor(private http : HttpClient) { }


  getQuestion(jsonPath: string= defaultJSONPath){
    return this.http.get<{ category: string; items: string[]}>(jsonPath);
  }
}
