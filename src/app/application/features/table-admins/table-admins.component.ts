import { AdminTableColumns, PrimengModules } from '@shared/constants';
import { AdminRepository } from '@app/data/repository';
import { AdminListCommand } from '@app/data/commands';
import { TableComponent } from '@components/table';
import { Component, inject } from '@angular/core';
import { AdminTableColumn } from '@shared/type';

@Component({
  selector: 'app-table-admins',
  standalone: true,
  templateUrl: './table-admins.component.html',
  styleUrl: './table-admins.component.scss',
  imports: [ TableComponent, PrimengModules ],
  providers: [ AdminListCommand ]
})
export class TableAdminsComponent {
  private readonly adminListCommand: AdminListCommand = inject(AdminListCommand);

  protected readonly repository: AdminRepository = inject(AdminRepository);

  protected readonly AdminTableColumns: Array<AdminTableColumn> = AdminTableColumns;

  constructor() {
    this.adminListCommand.execute(this.repository.pagination());
  }

  handlePageSetting(event: { first: number; rows: number }): void {
    this.repository.pagination.set({page: event.first, limit: event.rows});
    this.adminListCommand.execute({page: event.first, limit: event.rows});
  }

  handleCreateAdmin(): void {
    console.log('create new admin');
  }
}
