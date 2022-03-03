import { Component, OnInit } from "@angular/core";

import { CatalogRepositoryService } from "../catalog/catalog-repository.service";

import { UserRepositoryService } from "../core/user-repository.service";
import { IClass  } from "./classs.model";
import { FilterClassesService } from "./filter-classes.service";
@Component({
  styleUrls: ["../catalog/catalog.component.css"],
  templateUrl: "../catalog/catalog.component.html",
})
export class CatalogComponent implements OnInit {
  classes: IClass[] = [];
  visibleClasses: IClass[]  = [];

  constructor(
    public userRepository: UserRepositoryService,
    public catalogRepository: CatalogRepositoryService,
    private filterClassesService: FilterClassesService
  ) {}

  ngOnInit() {
    this.catalogRepository.getCatalog().subscribe((classes) => {
      this.classes = classes;
      this.applyFilter("");
    });
  }

  enroll(classToEnroll:IClass) {
    classToEnroll.processing = true;
    this.userRepository.enroll(classToEnroll.classId).subscribe(
      null,
      (err) => {
        console.error(err);
        classToEnroll.processing = false;
      }, //add a toast message or something
      () => {
        classToEnroll.processing = false;
        classToEnroll.enrolled = true;
      }
    );
  }

  drop(classToDrop: IClass) {
    classToDrop.processing = true;
    this.userRepository.drop(classToDrop.classId).subscribe(
      null,
      (err) => {
        console.error(err);
        classToDrop.processing = false;
      }, //add a toast message or something
      () => {
        classToDrop.processing = false;
        classToDrop.enrolled = false;
      }
    );
  }


  applyFilter(filter:string) {
    this.visibleClasses = this.filterClassesService.filterClasses(filter, this.classes);
  }


}
