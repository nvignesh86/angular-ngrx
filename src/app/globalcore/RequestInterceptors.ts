import { HttpEvent, HttpHandler, HttpParams, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, exhaustMap, filter, map } from "rxjs";

@Injectable()
export class RequestInterceptors{
    intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("HttpInterceptor Inside");
        const request = httpRequest.clone({
            setHeaders:{APIKEY:'12456'},
            params: new HttpParams().set("application", "Sample")
        });
        return next.handle(request).pipe(
            filter((event: any) => event instanceof HttpResponse && httpRequest.url.includes('products')),
            map((event: HttpResponse<any>) => {
                console.log(event.body);
                const modifiedResp = event.body;
                modifiedResp.test="Test";
                //throw new Error("My Error====="); // uncomment for error handling testing
                return event.clone({body: modifiedResp})
            } )
        );
    }
}