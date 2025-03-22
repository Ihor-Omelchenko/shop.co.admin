import { ProductsDataTableComponent } from '@app/application/components';
import { PrimengModules, ProductTableColumns } from '@shared/constants';
import { ProductRepository } from '@app/data/repository';
import { ProductListCommand } from '@app/data/commands';
import { Component, inject } from '@angular/core';
import { ProductTableColumn } from '@shared/type';

@Component({
  selector: 'app-table-products',
  standalone: true,
  templateUrl: './table-products.component.html',
  styleUrl: './table-products.component.scss',
  imports: [ ProductsDataTableComponent, PrimengModules ],
  providers: [ ProductListCommand ]
})
export class TableProductsComponent {
  private readonly productListCommand: ProductListCommand = inject(ProductListCommand);

  protected readonly repository: ProductRepository = inject(ProductRepository);

  protected readonly ProductTableColumns: Array<ProductTableColumn> = ProductTableColumns;

  constructor() {
    this.productListCommand.execute();
  }


  handlePageSetting(event: { first: number; rows: number }): void {
    this.repository.pagination.set({page: event.first, limit: event.rows});
    this.productListCommand.execute();
  }
}
