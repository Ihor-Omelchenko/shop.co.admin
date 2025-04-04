import { ProductCreateCommand, ProductDeleteCommand, ProductListCommand, ProductReadeCommand, ProductUpdateCommand } from '@app/data/commands';
import { FormProductComponent, TableProductComponent } from '@app/application/components';
import { PrimengModules, ProductTableColumns } from '@shared/constants';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Component, computed, inject, Signal } from '@angular/core';
import { ProductCreateDto, ProductUpdateDto } from '@app/data/dto';
import { ProductRepository } from '@app/data/repository';
import { ProductEntity } from '@app/data/entities';
import { ProductTableColumn } from '@shared/type';

@Component({
  selector: 'app-list-product',
  standalone: true,
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.scss',
  imports: [ TableProductComponent, PrimengModules ],
  providers: [ ProductListCommand, ProductCreateCommand, ProductDeleteCommand, ProductReadeCommand, ProductUpdateCommand, DialogService ]
})
export class ListProductComponent {
  private readonly productDeleteCommand: ProductDeleteCommand = inject(ProductDeleteCommand);
  private readonly productCreateCommand: ProductCreateCommand = inject(ProductCreateCommand);
  private readonly productUpdateCommand: ProductUpdateCommand = inject(ProductUpdateCommand);
  private readonly productReadeCommand: ProductReadeCommand = inject(ProductReadeCommand);
  private readonly productListCommand: ProductListCommand = inject(ProductListCommand);

  protected readonly repository: ProductRepository = inject(ProductRepository);

  private readonly dialogService: DialogService = inject(DialogService);

  protected readonly ProductTableColumns: Array<ProductTableColumn> = ProductTableColumns;

  data: Signal<Array<ProductEntity>> = computed((): Array<ProductEntity> => this.repository.productList());

  constructor() {
    this.productListCommand.execute();
  }

  handlePageSetting(event: { first: number; rows: number }): void {
    this.repository.pagination.set({page: event.first, limit: event.rows});
    this.productListCommand.execute();

    this.repository.allSelected.set(false);
    this.repository.selectedRows.set([]);
  }

  handleCreateProduct(): void {
    const ref: DynamicDialogRef = this.dialogService.open(FormProductComponent, {
      header: 'Product Create',
      closable: true,
      modal: true,
      style: {
        width: '75vw',
        'min-width': '50vw',
      }
    });

    ref.onClose.subscribe((data: ProductCreateDto): void => {
      if (data) {
        console.log('7')
        this.productCreateCommand.execute(data);
      }
    });
  }

  handleToggleRowSelection(event: { selected: boolean; rowData: ProductEntity }): void {
    this.repository.selectedRows.set(
      event.selected
        ? [ ...this.repository.selectedRows(), event.rowData ]
        : this.repository.selectedRows().filter((row) => row !== event.rowData)
    );
  }

  handleToggleAllRows(event: { selected: boolean }): void {
    this.repository.selectedRows.update((selected: Array<ProductEntity>): Array<ProductEntity> =>
      event.selected ? [ ...new Set([ ...selected, ...this.data() ]) ] : selected.filter((uuid) => !this.data().includes(uuid))
    );

    this.repository.allSelected.set(this.repository.selectedRows().length > 0);
  }

  handleDelete(): void {
    this.productDeleteCommand.execute(this.repository.selectedRows().map((row: ProductEntity): string => row.productId));

    this.repository.allSelected.set(false);
    this.repository.selectedRows.set([]);
  }

  handleEditProduct(event: { productId: string }): void {
    this.productReadeCommand.execute(event.productId);

    const ref: DynamicDialogRef = this.dialogService.open(FormProductComponent, {
      header: 'Product Update',
      closable: true,
      modal: true,
      style: {
        width: '75vw',
        'min-width': '50vw',
      }
    });

    ref.onClose.subscribe((data: ProductUpdateDto): void => {
      if (data) {
        this.productUpdateCommand.execute(data);
      }
    });
  }
}
