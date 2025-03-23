import { ProductCreateDto, ProductDto } from '@app/data/dto';
import { ProductListCommand } from '@app/data/commands';
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@libs/environments';
import { MessageService } from 'primeng/api';

@Injectable()
export class ProductCreateCommand {
  private readonly apiUrl: string = `${environment.API_URL}/api/products/addProduct`;

  private readonly productListCommand: ProductListCommand = inject(ProductListCommand);

  private readonly messageService: MessageService = inject(MessageService);
  private readonly http: HttpClient = inject(HttpClient);

  execute(productParams: ProductCreateDto): void {
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
