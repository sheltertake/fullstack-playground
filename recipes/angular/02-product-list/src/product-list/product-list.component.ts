import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  pageTitle:string = "Product List";
  imageWidth:number =80;
  imageMargin: number = 10;
  showImage:boolean = false;
  products:any []= [
    {
      "Id":1,
      "Name":"Garden Card",
      "Code":"GDN-456",
      "releaseDate":"April 12, 2020",
      "description":"20 liters capacity rolling cart",
      "price": 12.98,
      "startRating": 4.3,
      "imageURl":"assets/product.png"
    },
    {
      "Id":2,
      "Name":"Boat",
      "Code":"KKA-456",
      "releaseDate":"June 12, 1998",
      "description":"simple boat",
      "price": 992.98,
      "startRating": 3.3,
      "imageURl":"assets/product.png"
    }
    ,
    {
      "Id":3,
      "Name":"Big pen",
      "Code":"AAA-456",
      "releaseDate":"May 22, 2020",
      "description":"simple pen",
      "price": 2.98,
      "startRating": 1.3,
      "imageURl":"assets/product.png"
    }
    ,
    {
      "Id":1,
      "Name":"Bag",
      "Code":"WWA-406",
      "releaseDate":"January 12, 2021",
      "description":"simple bag",
      "price": 99.98,
      "startRating": 5,
      "imageURl":"assets/product.png"
    }
  ];
  toggleImage():void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
  }

}
