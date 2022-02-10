import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit,OnDestroy {

  products: IProduct[] = [];

  constructor(private productService: ProductService) { }

  pageTitle:string = "Product List";
  imageWidth:number =80;
  imageMargin: number = 10;
  showImage:boolean = false;
  filteredProducts: IProduct[] = [];
  errorMessage: string ='';
  sub!: Subscription;


  private _listFilter:string='';
  
  get listFilter():string {
    return this._listFilter;
  }

  set listFilter(value:string) {
     this._listFilter = value;
     this.filteredProducts = this.performFilter(value);
  }




  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: products => {
         this.products = products;
         this.filteredProducts=this.products;
      },
      error: err => this.errorMessage = err
    });

  }

  ngOnDestroy(): void {
      // this.sub.unsubscribe();
  }
  
  toggleImage():void {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string): void {

    this.pageTitle = 'Product List:'+message;
  };

 performFilter(filterBy: string): IProduct[] {
   filterBy = filterBy.toLocaleLowerCase();
   return this.products.filter((product:IProduct)=>product.title.toLocaleLowerCase().includes(filterBy));
 }
}
