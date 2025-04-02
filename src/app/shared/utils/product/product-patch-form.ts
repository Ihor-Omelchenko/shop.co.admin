import { FormControl, FormGroup } from '@angular/forms';
import { ProductEntity } from '@app/data/entities';

export function patchProductForm(form: FormGroup, product: ProductEntity): void {
  if (!form.contains('_id')) {
    form.addControl('_id', new FormControl(product.productId));
  } else {
    form.get('_id')?.setValue(product.productId);
  }

  form.patchValue({
    title: product.productName,
    description: product.productDescription,
    status: product.productStatus,
    category: product.productCategory,
    reviews: product.productReviews,
    price: product.productPrice,
    quantity: product.productQuantity,
    imageUrl: product.productImage
  });

  form.get('imageId')?.clearValidators();
  form.get('imageId')?.updateValueAndValidity();
}

