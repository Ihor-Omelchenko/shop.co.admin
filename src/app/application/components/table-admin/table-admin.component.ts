import { Component, effect, input, InputSignal, output, OutputEmitterRef, signal, WritableSignal } from '@angular/core';
import { DropdownChangeEvent, DropdownModule } from 'primeng/dropdown';
import { MultiSelectChangeEvent } from 'primeng/multiselect';
import { PrimengModules, roleList } from '@shared/constants';
import { PaginatorState } from 'primeng/paginator';
import { AdminEntity } from '@app/data/entities';
import { AdminTableColumn } from '@shared/type';
import { FormsModule } from '@angular/forms';
import { RoleSeverity } from '@shared/utils';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-table-admin',
  standalone: true,
  templateUrl: './table-admin.component.html',
  styleUrl: './table-admin.component.scss',
  imports: [ FormsModule, NgStyle, PrimengModules, DropdownModule ]
})
export class TableAdminComponent {
  protected readonly roleSeverity = RoleSeverity;
  protected readonly roleList = roleList;

  pageSetting: OutputEmitterRef<{ first: number; rows: number }> = output<{ first: number; rows: number }>()
  selectRole: OutputEmitterRef<{ role: string }> = output();
  removeAdmin: OutputEmitterRef<{ id: string }> = output();
  createNewAdmin: OutputEmitterRef<void> = output();

  columns: InputSignal<Array<AdminTableColumn>> = input.required();
  dataList: InputSignal<Array<AdminEntity>> = input.required();
  totalRecords: InputSignal<number> = input.required();
  loading: InputSignal<boolean> = input.required();
  limit: InputSignal<number> = input.required();
  page: InputSignal<number> = input.required();

  selectedColumnsState: WritableSignal<Array<AdminTableColumn>> = signal([]);

  constructor() {
    effect((): void => {
      if (this.columns()) {
        const activeColumns: Array<AdminTableColumn> = this.columns()
          .filter((column: AdminTableColumn): boolean => !column.isActive)
          .sort((a: AdminTableColumn, b: AdminTableColumn): number => a.order - b.order);
        this.selectedColumnsState.set(activeColumns);
      }
    }, {allowSignalWrites: true});
  }

  onSelectChange(event: MultiSelectChangeEvent): void {
    const sortedColumns: Array<AdminTableColumn> = event.value.sort((a: AdminTableColumn, b: AdminTableColumn): number => a.order - b.order);
    this.selectedColumnsState.set(sortedColumns);
  }

  onSelectRoleChange(event: DropdownChangeEvent): void {
    this.selectRole.emit(event.value)
  }

  addNewAdmin(): void {
    this.createNewAdmin.emit();
  }

  removeAdminById(adminId: string): void {
    this.removeAdmin.emit({id: adminId});
  }

  onPageChange(event: PaginatorState): void {
    const page: number = event.page ?? 0;
    const rows: number = event.rows ?? 10;

    this.pageSetting.emit({first: page, rows: rows});
  }
}
