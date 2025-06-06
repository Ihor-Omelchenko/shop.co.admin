import { Injectable, signal, WritableSignal } from '@angular/core';
import { ProductEntity } from '@app/data/entities';
import { Pagination } from '@shared/type';

@Injectable({providedIn: 'root'})
export class ProductRepository {
  readeProduct: WritableSignal<ProductEntity | null> = signal(null);
  productList: WritableSignal<Array<ProductEntity>> = signal([]);

  pagination: WritableSignal<Pagination> = signal({page: 0, limit: 15});
  totalRecords: WritableSignal<number> = signal(0);
  loading: WritableSignal<boolean> = signal(false);

  selectedRows: WritableSignal<Array<ProductEntity>> = signal([]);
  allSelected: WritableSignal<boolean> = signal(false);

  selectCategory: WritableSignal<string> = signal('all');
  selectPetType: WritableSignal<string> = signal('all');
}
