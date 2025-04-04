import { AdminCreateCommand, AdminListCommand, AdminRemoveCommand } from '@app/data/commands';
import { FormAdminComponent, TableAdminComponent } from '@app/application/components';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AdminTableColumns, PrimengModules } from '@shared/constants';
import { AdminRepository } from '@app/data/repository';
import { Component, inject } from '@angular/core';
import { AdminTableColumn } from '@shared/type';

@Component({
  selector: 'app-list-admin',
  standalone: true,
  templateUrl: './list-admin.component.html',
  styleUrl: './list-admin.component.scss',
  imports: [ TableAdminComponent, PrimengModules ],
  providers: [ AdminListCommand, AdminCreateCommand, AdminRemoveCommand, DialogService ]
})
export class ListAdminComponent {
  private readonly adminRemoveCommand: AdminRemoveCommand = inject(AdminRemoveCommand);
  private readonly adminCreateCommand: AdminCreateCommand = inject(AdminCreateCommand);
  private readonly adminListCommand: AdminListCommand = inject(AdminListCommand);

  private readonly dialogService: DialogService = inject(DialogService);

  protected readonly repository: AdminRepository = inject(AdminRepository);

  protected readonly AdminTableColumns: Array<AdminTableColumn> = AdminTableColumns;

  constructor() {
    this.adminListCommand.execute();
  }

  handlePageSetting(event: { first: number; rows: number }): void {
    this.repository.pagination.set({page: event.first, limit: event.rows});
    this.adminListCommand.execute();
  }

  handleCreateAdmin(): void {
    const ref: DynamicDialogRef = this.dialogService.open(FormAdminComponent, {
      header: 'Add an administrator',
      width: '400px',
      closable: true,
      modal: true,
    });

    ref.onClose.subscribe((data) => {
      if (data) {
        this.adminCreateCommand.execute(data);
      }
    });
  }

  handleRemoveAdmin(event: {id: string}): void {
    this.adminRemoveCommand.execute(event)
  }

  handleSelectRole(event: {role: string}): void {
    this.repository.selectRole.set(event.role);
    this.adminListCommand.execute();
  }
}
