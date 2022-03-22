import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {
  title = 'Dashboard';
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    console.log( "aaa"+this.dataService.getProdDash().subscribe());
  }

}
