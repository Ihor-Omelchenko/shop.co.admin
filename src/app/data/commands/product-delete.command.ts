import { ProductListCommand } from '@app/data/commands/product-list.command';
import { ProductRepository } from '@app/data/repository';
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@libs/environments';
import { MessageService } from 'primeng/api';
import { finalize } from 'rxjs';

type ProductDeleteResponse = {
  message: string;
  deleted: Array<string>;
}

@Injectable()
export class ProductDeleteCommand {
  private readonly apiUrl: string = `${environment.API_URL}/api/products/remove`;

  private readonly productListCommand: ProductListCommand = inject(ProductListCommand);

  private readonly repository: ProductRepository = inject(ProductRepository);
  private readonly messageService: MessageService = inject(MessageService);
  private readonly http: HttpClient = inject(HttpClient);

  execute(productIds: Array<string>): void {
    this.repository.loading.set(true);
    this.http.post<ProductDeleteResponse>(this.apiUrl, {productIds: productIds})
      .pipe(
        finalize((): void => {
          this.repository.loading.set(false);
        })
      )
      .subscribe({
        next: (res: ProductDeleteResponse) => {
          this.messageService.add({severity: 'success', summary: 'Product delete', detail: `${res.message}`, life: 3000});
          this.productListCommand.execute();
        },
        error: (err) => {
          this.messageService.add({severity: 'error', summary: 'Error', detail: `${err.error.error}`, life: 3000});
        }
      })
  }
}
