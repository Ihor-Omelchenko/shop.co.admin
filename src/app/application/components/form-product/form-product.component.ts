import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { patchProductForm, productCreateForm } from "@shared/utils/product";
import { categories, PrimengModules, statuses } from '@shared/constants';
import { Component, effect, inject, OnDestroy } from '@angular/core';
import { FileUploadHandlerEvent } from 'primeng/fileupload';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProductRepository } from "@app/data/repository";
import { HttpClient } from '@angular/common/http';
import { environment } from '@libs/environments';
import { ProductEntity } from '@app/data/entities';

@Component({
  selector: 'app-form-product',
  standalone: true,
  templateUrl: './form-product.component.html',
  styleUrl: './form-product.component.scss',
  imports: [ PrimengModules, FormsModule, ReactiveFormsModule ]
})
export class FormProductComponent implements OnDestroy {
  private readonly repository: ProductRepository = inject(ProductRepository);

  private readonly ref: DynamicDialogRef = inject(DynamicDialogRef);
  private readonly fb: FormBuilder = inject(FormBuilder);

  private readonly http: HttpClient = inject(HttpClient)

  protected readonly categories = categories;
  protected readonly statuses = statuses;

  preview: string | ArrayBuffer | null = null;
  form!: FormGroup;

  constructor() {
    this.form = productCreateForm(this.fb);

    effect((): void => {
      const product: ProductEntity | null = this.repository.readeProduct();
      if (product) {
        patchProductForm(this.form, product);
        this.preview = product.productImage;
      }
    }, {allowSignalWrites: true});
  }

  ngOnDestroy(): void {
    this.repository.readeProduct.set(null);
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
          const isEditMode: boolean = !!this.repository.readeProduct();

          if (isEditMode) {
            this.form.get('imageUrl')?.setValue(`/api/images/${res.fileId}`);
          } else {
            this.form.get('imageId')?.setValue(res.fileId);
          }
        }
      });
  }

  removeImage(): void {
    this.preview = null;
    this.form.get('imageId')?.reset();
  }
}
