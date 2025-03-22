import { HttpClient, HttpParams } from '@angular/common/http';
import { ProductRepository } from '@app/data/repository';
import { inject, Injectable } from '@angular/core';
import { ProductMapper } from '@app/data/mappers';
import { environment } from '@libs/environments';
import { MessageService } from 'primeng/api';
import { ProductDto } from '@app/data/dto';
import { Pagination } from '@shared/type';
import { finalize, tap } from 'rxjs';

type ProductListResponse = {
  totalProduct: number;
  totalPages: number;
  currentPage: number;
  products: Array<ProductDto>;
}

@Injectable()
export class ProductListCommand {
  private readonly apiUrl = `${environment.API_URL}/api/products`;

  private readonly messageService: MessageService = inject(MessageService);
  private readonly repository: ProductRepository = inject(ProductRepository);
  private readonly http: HttpClient = inject(HttpClient);

  execute(): void {
    this.repository.loading.set(true);
    const pagination: Pagination = this.repository.pagination()

    const httpParams = new HttpParams({
      fromObject: {
        page: pagination.page + 1,
        limit: pagination.limit
      }
    });

    this.http.get<ProductListResponse>(this.apiUrl, {params: httpParams})
      .pipe(
        tap((response: ProductListResponse) => {
          this.repository.totalRecords.set(response.totalProduct);
          this.repository.productList.set(response.products.map(ProductMapper.toProduct));
        }),
        finalize((): void => {
          this.repository.loading.set(false);
        })
      )
      .subscribe({
        error: (err): void => {
          this.messageService.add({severity: 'error', summary: 'Error', detail: `${err.error.error}`, life: 3000});
        }
      })
  }
}
