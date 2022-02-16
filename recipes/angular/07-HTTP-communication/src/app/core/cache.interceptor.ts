import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor,HttpRequest, HttpEventType, HttpResponse, HttpContextToken } from "@angular/common/http";
import { Observable,of } from "rxjs";
import { ignoreElements, tap } from "rxjs/operators";
import { HttpChaceService } from "./http-cache.service";


export const CACHEABLE = new HttpContextToken(()=> true);

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
    

    constructor(private cacheService: HttpChaceService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


        //only cache requests configured to be cacheable

        if(!req.context.get(CACHEABLE)){
            return next.handle(req);
        }

        //pass along non-cacheble request and invalidate the cache
        if(req.method !== 'GET') {
            console.log(`Ivalidating cache. ${req.method} ${req.url}`);
            this.cacheService.invalidateCache();
            
            return next.handle(req);
        }

        //attempt to retrive a cached response
        const cachedResponse: HttpResponse<any> = this.cacheService.get(req.url);

        if(cachedResponse) {
            console.log(`Returning a cached response: ${cachedResponse.url}`);
            console.log(cachedResponse);
            return of(cachedResponse);
            
        }


        //send request to server and add response to cache
        return next.handle(req).pipe(
            tap(event => {
                if(event instanceof HttpResponse) {
                    console.log(`Adding item to cache. ${req.url}`);
                    this.cacheService.put(req.url, event);
                    
                }
            })
        )

    }


}