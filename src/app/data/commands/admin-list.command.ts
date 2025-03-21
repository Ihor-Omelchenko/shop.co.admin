import { HttpClient, HttpParams } from '@angular/common/http';
import { AdminRepository } from '@app/data/repository';
import { inject, Injectable } from '@angular/core';
import { environment } from '@libs/environments';
import { AdminMapper } from '@app/data/mappers';
import { MessageService } from 'primeng/api';
import { Pagination } from '@shared/type';
import { AdminDto } from '@app/data/dto';
import { finalize, tap } from 'rxjs';

type AdminList = {
  currentPage: number;
  totalAdmins: number;
  totalPages: number;
  admins: Array<AdminDto>;
}

@Injectable()
export class AdminListCommand {
  private readonly apiUrl = `${environment.API_URL}/api/admins`;

  private readonly messageService: MessageService = inject(MessageService);
  private readonly repository: AdminRepository = inject(AdminRepository);
  private readonly http: HttpClient = inject(HttpClient);

  execute(): void {
    this.repository.loading.set(true);
    const pagination: Pagination = this.repository.pagination()

    const httpParams = new HttpParams({ fromObject: {
        page: pagination.page + 1,
        limit: pagination.limit,
        ...(this.repository.selectRole() !== 'all' && { role: this.repository.selectRole() })
      }});

    this.http.get<AdminList>(this.apiUrl, {params: httpParams})
      .pipe(
        tap((response: AdminList): void => {
          this.repository.totalRecords.set(response.totalAdmins);
          this.repository.adminList.set(response.admins.map(AdminMapper.toAdmin));
        }),
        finalize((): void => {
          this.repository.loading.set(false);
        })
      )
      .subscribe({
        error: (err): void => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: `${err.error.error}`, life: 3000 });
        }
      });
  }
}
