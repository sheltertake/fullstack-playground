import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUserSettings } from './IUserSettings';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) {   }

  getSubscriptionTypes():Observable<string[]> {
    return of(['Monthly','Annual','Lifetime']);

  }


    postUsersettingsForm(userSettings: IUserSettings) : Observable<any>{
       return  this.http.post("https://putsreq.com/lvanXPXzC0u0DlydscgU",userSettings);
    }

}
