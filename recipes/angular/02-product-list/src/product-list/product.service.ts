import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import {  Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { IProduct } from "./product";
import {catchError, tap} from "rxjs/operators"

@Injectable({
    providedIn:'root'
})
export class ProductService {

    private productUrl ="https://fakestoreapi.com/products";

    constructor(private http:HttpClient){}

getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
        catchError(this.handleError)
    );
}

private handleError(err:HttpErrorResponse){

    let errorMessage="";
    if (err.error instanceof ErrorEvent){
        errorMessage = `An error occured:${err.error.message}`;
    } else {
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);

}

}