import { AdminListCommand } from './admin-list.command';
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@libs/environments';
import { MessageService } from 'primeng/api';
import { role } from '@shared/type';

type AdminCreateResponse = {
  userId: string;
  message: string;
  role: role;
}

@Injectable()
export class AdminCreateCommand {
  private readonly apiUrl: string = `${environment.API_URL}/api/auth/register`;

  private readonly adminListCommand: AdminListCommand = inject(AdminListCommand);

  private readonly messageService: MessageService = inject(MessageService);
  private readonly http: HttpClient = inject(HttpClient);

  execute(adminParams: {username: string; password: string}): void {
    this.http.post<AdminCreateResponse>(this.apiUrl, adminParams)
      .subscribe({
        next: (res: AdminCreateResponse) => {
          this.messageService.add({ severity: 'success', summary: 'Successful registration', detail: `${res.message}`, life: 3000 });
          this.adminListCommand.execute();
        },
        error: () => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Register failed', life: 3000 });
        }
      })
  }
}
