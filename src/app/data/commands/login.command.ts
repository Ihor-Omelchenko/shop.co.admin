import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@libs/environments';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

type LoginResponse = {
  accessToken: string;
  refreshToken: string;
}

@Injectable()
export class LoginCommand {
  private readonly apiUrl = `${environment.API_URL}/api/auth/login`;

  private readonly messageService: MessageService = inject(MessageService);
  private readonly http: HttpClient = inject(HttpClient);
  private readonly router:Router = inject(Router);

  execute(username: string, password: string): void {
    this.http.post<LoginResponse>(this.apiUrl, { username, password })
      .pipe(
        tap((response: LoginResponse): void => {
          localStorage.setItem('access_token', response.accessToken);
          localStorage.setItem('refresh_token', response.refreshToken);
          this.router.navigate(['']);
          this.messageService.add({ severity: 'success', summary: 'Success', detail: `You are logged`, life: 3000 });
        })
      )
      .subscribe({
        error: () => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Login failed', life: 3000 });
        }
      });
  }
}
