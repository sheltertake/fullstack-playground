import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

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
  filteredProducts: IProduct[] = [];

  private _listFilter:string='';
  
  get listFilter():string {
    return this._listFilter;
  }

  set listFilter(value:string) {
     this._listFilter = value;
     this.filteredProducts = this.performFilter(value);
  }

   




  products:IProduct []= [
    {
      "id":1,
      "name":"Garden Cart",
      "code":"GDN-456",
      "releaseDate":"April 12, 2020",
      "description":"20 liters capacity rolling cart",
      "price": 12.98,
      "starRating": 4,
      "imageURl":"assets/product.png"
    },
    {
      "id":2,
      "name":"Boat",
      "code":"KKA-456",
      "releaseDate":"June 12, 1998",
      "description":"simple boat",
      "price": 992.98,
      "starRating": 3,
      "imageURl":"assets/product.png"
    }
    ,
    {
      "id":3,
      "name":"pen",
      "code":"AAA-456",
      "releaseDate":"May 22, 2020",
      "description":"simple pen",
      "price": 2.98,
      "starRating": 1,
      "imageURl":"assets/product.png"
    }
    ,
    {
      "id":1,
      "name":"Bag",
      "code":"WWA-406",
      "releaseDate":"January 12, 2021",
      "description":"simple bag",
      "price": 99.98,
      "starRating": 5.4,
      "imageURl":"assets/product.png"
    }
    ,
    {
      "id":1,
      "name":"Bag",
      "code":"WWA-406",
      "releaseDate":"January 12, 2021",
      "description":"simple bag",
      "price": 99.98,
      "starRating": 5.2,
      "imageURl":"assets/product.png"
    }
    ,
    {
      "id":1,
      "name":"Bag",
      "code":"WWA-406",
      "releaseDate":"January 12, 2021",
      "description":"simple bag",
      "price": 99.98,
      "starRating": 2.4,
      "imageURl":"assets/product.png"
    }
    ,
    {
      "id":1,
      "name":"Bag",
      "code":"WWA-406",
      "releaseDate":"January 12, 2021",
      "description":"simple bag",
      "price": 99.98,
      "starRating": 4.8,
      "imageURl":"assets/product.png"
    }
    ,
    {
      "id":1,
      "name":"Bag",
      "code":"WWA-406",
      "releaseDate":"January 12, 2021",
      "description":"simple bag",
      "price": 99.98,
      "starRating": 1.1,
      "imageURl":"assets/product.png"
    }
    ,
    {
      "id":1,
      "name":"Bag",
      "code":"WWA-406",
      "releaseDate":"January 12, 2021",
      "description":"simple bag",
      "price": 99.98,
      "starRating": 4.2,
      "imageURl":"assets/product.png"
    }
    ,
    {
      "id":1,
      "name":"Bag",
      "code":"WWA-406",
      "releaseDate":"January 12, 2021",
      "description":"simple bag",
      "price": 99.98,
      "starRating": 4.8,
      "imageURl":"assets/product.png"
    }
    ,
    {
      "id":1,
      "name":"Bag",
      "code":"WWA-406",
      "releaseDate":"January 12, 2021",
      "description":"simple bag",
      "price": 99.98,
      "starRating": 5,
      "imageURl":"assets/product.png"
    }

  ];
  toggleImage():void {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string): void {

    this.pageTitle = 'Product List:'+message;
  };

  ngOnInit(): void {
    this.listFilter='';
  }
 performFilter(filterBy: string): IProduct[] {
   filterBy = filterBy.toLocaleLowerCase();
   return this.products.filter((product:IProduct)=>product.name.toLocaleLowerCase().includes(filterBy));
 }
}
