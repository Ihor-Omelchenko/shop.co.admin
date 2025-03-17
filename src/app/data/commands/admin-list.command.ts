import { HttpClient, HttpParams } from '@angular/common/http';
import { AdminRepository } from '@app/data/repository';
import { inject, Injectable } from '@angular/core';
import { environment } from '@libs/environments';
import { AdminMapper } from '@app/data/mappers';
import { AdminDto } from '@app/data/dto';
import { finalize, tap } from 'rxjs';

type AdminList = {
  currentPage: number;
  totalUsers: number;
  totalPages: number;
  users: Array<AdminDto>;
}

@Injectable()
export class AdminListCommand {
  private readonly apiUrl = `${environment.API_URL}/api/users`;

  private readonly repository: AdminRepository = inject(AdminRepository);
  private readonly http: HttpClient = inject(HttpClient);

  execute(params: { page: number; limit: number }): void {
    this.repository.loading.set(true);

    const httpParams: HttpParams = new HttpParams()
      .set('page', params.page + 1)
      .set('limit', params.limit)

    this.http.get<AdminList>(this.apiUrl, { params: httpParams })
      .pipe(
        tap((response: AdminList): void => {
          this.repository.totalRecords.set(response.totalUsers);
          this.repository.adminList.set(response.users.map(AdminMapper.toAdmin));
        }),
        finalize((): void => {
          this.repository.loading.set(false);
        })
      )
      .subscribe({
        error: (): void => {
          console.error('Error fetching users:');
        }
      });
  }
}
