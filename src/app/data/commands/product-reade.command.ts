import { HttpClient, HttpParams } from '@angular/common/http';
import { ProductRepository } from '@app/data/repository';
import { inject, Injectable } from '@angular/core';
import { ProductEntity } from '@app/data/entities';
import { ProductMapper } from '@app/data/mappers';
import { environment } from '@libs/environments';
import { MessageService } from 'primeng/api';
import { ProductDto } from '@app/data/dto';
import { finalize, tap } from 'rxjs';

type ProductReadeResponse = {
  totalProduct: number;
  totalPages: number;
  currentPage: number;
  products: Array<ProductDto>;
}

@Injectable()
export class ProductReadeCommand {
  private readonly apiUrl = `${environment.API_URL}/api/products`;

  private readonly messageService: MessageService = inject(MessageService);
  private readonly repository: ProductRepository = inject(ProductRepository);
  private readonly http: HttpClient = inject(HttpClient);

  execute(productId: string): void {
    this.repository.loading.set(true);

    const httpParams = new HttpParams({
      fromObject: {page: 1, limit: 1, search: productId}
    });

    this.http.get<ProductReadeResponse>(this.apiUrl, {params: httpParams})
      .pipe(
        tap((response: ProductReadeResponse): void => {
          const products: Array<ProductEntity> = response.products.map(ProductMapper.toProduct)
          this.repository.readeProduct.set(products[0]);
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
