import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { PrimengModules } from '@shared/constants';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dialog-create-admin',
  standalone: true,
  templateUrl: './dialog-create-admin.component.html',
  styleUrl: './dialog-create-admin.component.scss',
  imports: [ FormsModule, PrimengModules ]
})
export class DialogCreateAdminComponent {
  private readonly ref: DynamicDialogRef = inject(DynamicDialogRef);

  protected readonly userData = {username: '', password: ''};

  submitForm(): void {
    this.ref.close(this.userData);
  }

  closeDialog(): void {
    this.ref.close();
  }
}
