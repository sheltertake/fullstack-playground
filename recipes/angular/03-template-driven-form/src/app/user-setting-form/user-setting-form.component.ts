import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from '../data/data.service';
import { IUserSettings } from '../data/IUserSettings';

@Component({
  selector: 'app-user-setting-form',
  templateUrl: './user-setting-form.component.html',
  styleUrls: ['./user-setting-form.component.scss']
})
export class UserSettingFormComponent implements OnInit {

  originalUserSettings: IUserSettings ={
    name: "Lorenzo",
    lastName: "Lombardo",
    emailOffers: true,
    interfaceStyle: "dark",
    subscriptionType: "Annual",
    notes: 'Write here...',
  
  }

  userSettings: IUserSettings = {...this.originalUserSettings};
  postError: boolean = false;
  postErrorMessage: string = "";
  subscriptionTypes:Observable<string[]> | undefined;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();
  }

  onHttpError(errorResponse:any){
    console.log("error",errorResponse);
    this.postError = true,
    this.postErrorMessage = errorResponse.error.errorMessage;

  }

  onSubmit(form: NgForm) {
    console.log("in onSubmit: ", form.valid);


    if(form.valid){

      this.dataService.postUsersettingsForm(this.userSettings).subscribe(
        result => console.log("success",result),
        error => this.onHttpError(error)
      );
    }else {
      this.postError=true;
      this.postErrorMessage="please fix the aboce errors"
    }
   
  }

  onBlur(field: NgModel){
    console.log("onBlur: ", field.valid)
  }

}
