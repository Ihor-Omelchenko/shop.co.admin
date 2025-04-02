import { ProductListCommand } from '@app/data/commands/product-list.command';
import { ProductDto, ProductUpdateDto } from '@app/data/dto';
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@libs/environments';
import { MessageService } from 'primeng/api';

@Injectable()
export class ProductUpdateCommand {
  private readonly apiUrl: string = `${environment.API_URL}/api/products/updateProduct`;

  private readonly productListCommand: ProductListCommand = inject(ProductListCommand);

  private readonly messageService: MessageService = inject(MessageService);
  private readonly http: HttpClient = inject(HttpClient);

  execute(productParams: ProductUpdateDto): void {
    this.http.post<ProductDto>(this.apiUrl, productParams)
      .subscribe({
        next: (res: ProductDto) => {
          this.messageService.add({severity: 'success', summary: 'Product create', detail: `${res.title}`, life: 3000});
          this.productListCommand.execute();
        },
        error: (err) => {
          this.messageService.add({severity: 'error', summary: 'Error', detail: `${err.error.error}`, life: 3000});
        }
      })
  }
}
