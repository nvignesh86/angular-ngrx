import { ErrorHandler, Injectable } from "@angular/core";

@Injectable()
export class MyErrorHandler implements ErrorHandler{
    handleError(error: any): void {
        console.log("Error==>", error);
    }
    
}