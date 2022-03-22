import { Component } from '@angular/core';
import { DataService } from './data.service';
import { IData } from './healt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // data:IData = { succeed= true,
  //   version = {
  //   application = "",
  //   version="",
  //   time= "",
  //   uri="" },
  //  meta={},
  //  extraChecks = []};

  constructor(){

  }


  ngOnInit(){

  }

}
