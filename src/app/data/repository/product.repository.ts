import { Injectable, signal, WritableSignal } from '@angular/core';
import { ProductEntity } from '@app/data/entities';
import { Pagination } from '@shared/type';

@Injectable({providedIn: 'root'})
export class ProductRepository {
  pagination: WritableSignal<Pagination> = signal({page: 0, limit: 15});
  productList: WritableSignal<Array<ProductEntity>> = signal([]);
  totalRecords: WritableSignal<number> = signal(0);
  loading: WritableSignal<boolean> = signal(false);
}
