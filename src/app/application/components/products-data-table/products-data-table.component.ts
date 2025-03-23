import { Component, effect, input, InputSignal, output, OutputEmitterRef, signal, WritableSignal } from '@angular/core';
import { MultiSelectChangeEvent } from 'primeng/multiselect';
import { CurrencyPipe, NgStyle } from '@angular/common';
import { ProductEntity } from '@app/data/entities';
import { PrimengModules } from '@shared/constants';
import { PaginatorState } from 'primeng/paginator';
import { ProductTableColumn } from '@shared/type';
import { statusSeverity } from '@shared/utils';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products-data-table',
  standalone: true,
  templateUrl: './products-data-table.component.html',
  styleUrl: './products-data-table.component.scss',
  imports: [ PrimengModules, NgStyle, FormsModule, CurrencyPipe ]
})
export class ProductsDataTableComponent {
  protected readonly statusSeverity = statusSeverity;

  toggleRowSelection = output<{ selected: boolean; rowData: ProductEntity; }>();
  pageSetting: OutputEmitterRef<{ first: number; rows: number }> = output<{ first: number; rows: number; }>();
  toggleAllRows = output<{ selected: boolean; }>();
  createNewProduct: OutputEmitterRef<void> = output();
  deleteProduct: OutputEmitterRef<void> = output();

  columns: InputSignal<Array<ProductTableColumn>> = input.required();
  selectedRows: InputSignal<Array<ProductEntity>> = input.required();
  dataList: InputSignal<Array<ProductEntity>> = input.required();
  allSelected: InputSignal<boolean> = input.required();
  totalRecords: InputSignal<number> = input.required();
  loading: InputSignal<boolean> = input.required();
  limit: InputSignal<number> = input.required();
  page: InputSignal<number> = input.required();

  selectedColumnsState: WritableSignal<Array<ProductTableColumn>> = signal([]);

  constructor() {
    effect((): void => {
      if (this.columns()) {
        const activeColumns: Array<ProductTableColumn> = this.columns()
          .filter((column: ProductTableColumn): boolean => !column.isActive)
          .sort((a: ProductTableColumn, b: ProductTableColumn): number => a.order - b.order);
        this.selectedColumnsState.set(activeColumns);
      }
    }, {allowSignalWrites: true});
  }

  onSelectChange(event: MultiSelectChangeEvent): void {
    const sortedColumns: Array<ProductTableColumn> = event.value.sort((a: ProductTableColumn, b: ProductTableColumn): number => a.order - b.order);
    this.selectedColumnsState.set(sortedColumns);
  }

  newProduct(): void {
    this.createNewProduct.emit();
  }

  removeProduct(): void {
    this.deleteProduct.emit();
  }

  onPageChange(event: PaginatorState): void {
    const page: number = event.page ?? 0;
    const rows: number = event.rows ?? 10;

    this.pageSetting.emit({first: page, rows: rows});
  }

  toggleAllRowsHandler(selected: boolean): void {
    this.toggleAllRows.emit({selected});
  }

  toggleRowSelectionHandler(selected: boolean, rowData: ProductEntity): void {
    this.toggleRowSelection.emit({selected, rowData});
  }
}
