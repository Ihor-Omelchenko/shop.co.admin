import { Injectable, signal, WritableSignal } from '@angular/core';
import { AdminEntity } from '@app/data/entities';
import { Pagination } from '@shared/type';

@Injectable({providedIn: 'root'})
export class AdminRepository {
  pagination: WritableSignal<Pagination> = signal({page: 0, limit: 15});
  adminList: WritableSignal<Array<AdminEntity>> = signal([]);
  totalRecords: WritableSignal<number> = signal(0);
  loading: WritableSignal<boolean> = signal(false);
}
