import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { IData } from './healt';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }


  getProdDash():Observable<any>{
    var configUrl ="https://time.uefa.com/Dashboard/api/healthcheck?allowsExtendedChecks=false";
    return this.http.get(configUrl)

  }
}
