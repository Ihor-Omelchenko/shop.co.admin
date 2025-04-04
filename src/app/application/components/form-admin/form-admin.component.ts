import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { PrimengModules } from '@shared/constants';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-admin',
  standalone: true,
  templateUrl: './form-admin.component.html',
  styleUrl: './form-admin.component.scss',
  imports: [ FormsModule, PrimengModules ]
})
export class FormAdminComponent {
  private readonly ref: DynamicDialogRef = inject(DynamicDialogRef);

  protected readonly adminData = {adminName: '', password: ''};

  submitForm(): void {
    this.ref.close(this.adminData);
  }

  closeDialog(): void {
    this.ref.close();
  }
}
