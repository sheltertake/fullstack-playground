import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/product-list/product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  pageTitle:string = "Product:";
  product:IProduct | undefined;
  constructor(private route: ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle+=`:${id}`;
    this.product = {
    "id":id,
    "title":"ciao",
    "price":0,
    "category":"",
    "description":"",
    "image":"",
    "rating": {
        "rate":0,
        "count":0,
    
     }
   }
  }

   onBack():void {
     this.router.navigate(['/products']);
   }



}
