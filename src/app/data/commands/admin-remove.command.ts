import { AdminListCommand } from './admin-list.command';
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@libs/environments';
import { MessageService } from 'primeng/api';

type AdminRemoveResponse = { message: string }

@Injectable()
export class AdminRemoveCommand {
  private readonly apiUrl: string = `${environment.API_URL}/api/auth/adminRemove`;

  private readonly adminListCommand: AdminListCommand = inject(AdminListCommand);

  private readonly messageService: MessageService = inject(MessageService);
  private readonly http: HttpClient = inject(HttpClient);

  execute(adminParams: {id: string}): void {
    this.http.post<AdminRemoveResponse>(this.apiUrl, adminParams)
      .subscribe({
        next: (res: AdminRemoveResponse) => {
          this.messageService.add({ severity: 'success', summary: 'Successful remove', detail: `${res.message}`, life: 3000 });
          this.adminListCommand.execute();
        },
        error: () => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Remove failed', life: 3000 });
        }
      })
  }
}
