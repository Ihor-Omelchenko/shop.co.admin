import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { categories, PrimengModules, statuses } from '@shared/constants';
import { FileUploadHandlerEvent } from 'primeng/fileupload';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@libs/environments';

@Component({
  selector: 'app-dialog-product-details',
  standalone: true,
  templateUrl: './dialog-product-details.component.html',
  styleUrl: './dialog-product-details.component.scss',
  imports: [ PrimengModules, FormsModule, ReactiveFormsModule ]
})
export class DialogProductDetailsComponent {
  private readonly ref: DynamicDialogRef = inject(DynamicDialogRef);
  private readonly fb: FormBuilder = inject(FormBuilder);

  private http: HttpClient = inject(HttpClient)

  protected readonly categories = categories;
  protected readonly statuses = statuses;

  preview: string | ArrayBuffer | null = null;
  form!: FormGroup;

  constructor() {
    this.form = this.fb.group({
      title: [ '', Validators.required ],
      description: [ '', Validators.required ],
      status: [ null, Validators.required ],
      category: [ '', Validators.required ],
      reviews: [ 0 ],
      price: [ null, Validators.required ],
      quantity: [ null, Validators.required ],
      imageId: [ '', Validators.required ]
    });
  }

  onSave(): void {
    this.ref.close(this.form.value);
  }

  onCancel(): void {
    this.ref.close();
  }

  uploadImage(event: FileUploadHandlerEvent): void {
    const file: File = event.files[0];

    const reader = new FileReader();
    reader.onload = (): void => {
      this.preview = reader.result;
    };
    reader.readAsDataURL(file);

    const formData = new FormData();
    formData.append('image', file);

    this.http.post<{ fileId: string }>(`${environment.API_URL}/api/images/upload`, formData)
      .subscribe({
        next: (res): void => {
          this.form.get('imageId')?.setValue(res.fileId);
        }
      });
  }

  removeImage(): void {
    this.preview = null;
    this.form.get('imageId')?.reset();
  }
}
