import { HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { inject, Injectable } from '@angular/core';
import { environment } from '@libs/environments';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly router: Router = inject(Router);

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = localStorage.getItem('access_token');

    let authReq = req;
    if (accessToken) {
      authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`
        }
      });
    }

    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          return this.handle401Error(authReq, next);
        }
        return throwError(() => error);
      })
    );
  }

  private handle401Error(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const refreshToken = localStorage.getItem('refresh_token');

    if (!refreshToken) {
      this.router.navigate(['/login']);
      return throwError(() => new Error('No refresh token'));
    }

    return this.http.post<any>(`${environment.API_URL}/api/auth/refresh`, { refreshToken }).pipe(
      switchMap((response) => {
        const newAccessToken = response.accessToken;
        localStorage.setItem('access_token', newAccessToken);

        const clonedReq = req.clone({
          setHeaders: {
            Authorization: `Bearer ${newAccessToken}`
          }
        });

        return next.handle(clonedReq);
      }),
      catchError(err => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        this.router.navigate(['/login']);
        return throwError(() => err);
      })
    );
  }
}
