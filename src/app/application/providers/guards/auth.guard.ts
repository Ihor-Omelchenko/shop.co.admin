import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

//TODO

export const authGuard: CanActivateFn = (): boolean => {
  const router: Router = inject(Router);
  const token: string | null = localStorage.getItem('refresh_token');

  if (token) {
    const decodedToken = JSON.parse(atob(token.split('.')[1]));
    const expDate: number = decodedToken.exp * 1000;
    const currentDate: number = new Date().getTime();

    if (expDate > currentDate) {
      return true;
    } else {
      localStorage.removeItem('refresh_token');
    }
  }

  router.navigate(['/login']);
  return false;
};
