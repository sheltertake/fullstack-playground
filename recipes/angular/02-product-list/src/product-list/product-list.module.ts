import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from 'src/product-detail/product-detail.component';
import { ProductListComponent } from './product-list.component';
import { ConvertToSpacesPipe } from 'src/shared/convert-to-spaces.pipe';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from 'src/product-detail/product-detail.guard';
import { StarComponent } from 'src/shared/star.component';


@NgModule({
  declarations: [

    ProductDetailComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent},

    ]),

  ]
})
export class ProductListModule { }
