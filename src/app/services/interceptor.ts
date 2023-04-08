import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class Interceptor implements HttpInterceptor {

  constructor(private _snackBar: MatSnackBar){}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const baseUrl = environment.baseUrl;

    request = request.clone({
      url: baseUrl + request.url
    });

    return next.handle(request).pipe(
      tap((event: any) => {
        if (event instanceof HttpResponse) {
          if(request.method !== 'GET') {
            this._snackBar.open('Data Saved Successfully', '', { duration: 2000, panelClass: ['mat-toolbar', 'mat-primary']});
          }
        }
      }),
      catchError(err => {
        if (err instanceof HttpErrorResponse) {
          this._snackBar.open(err.error.message, '', { duration: 2000, panelClass: ['mat-toolbar', 'mat-warn']});
        }
        return throwError(err);
      }));
  }
}
