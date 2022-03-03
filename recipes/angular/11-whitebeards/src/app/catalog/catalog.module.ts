import { NgModule } from '@angular/core';
import{ RouterModule } from '@angular/router';
import { CatalogRepositoryService } from './catalog-repository.service';
import { CatalogComponent } from './catalog.component';
import { SharedModule } from '../shared/shared.module';
import { FilterClassesService } from './filter-classes.service';
import { OrderByPipe } from './order-by.pipe';

@NgModule ( {
  imports: [ RouterModule , SharedModule],
  exports: [ CatalogComponent ],
  declarations: [ CatalogComponent, OrderByPipe],
  providers: [ CatalogRepositoryService , FilterClassesService]
})
export class CatalogModule {

};
