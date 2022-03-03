import { Injectable } from "@angular/core";
import { IClass } from "./classs.model";

@Injectable()
export class FilterClassesService {

  constructor() {

  }

  filterClasses(filter: string, classes: IClass[]) {
    if (!filter) return classes;

    if (filter === "GEN") {
     return this.showOnlyGeneralCourses(classes);
    }

    return classes.filter((c) =>
      c.course.courseNumber.startsWith(filter)
    );
  }


  showOnlyGeneralCourses(classes: IClass[]){
    return classes.filter(
      (c) =>
        !c.course.courseNumber.startsWith("CH") &&
        !c.course.courseNumber.startsWith("PO") &&
        !c.course.courseNumber.startsWith("SP")
    );
  }
}
