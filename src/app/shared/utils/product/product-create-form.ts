import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export function productCreateForm(fb: FormBuilder): FormGroup {
  return fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    status: [null, Validators.required],
    category: ['', Validators.required],
    petType: ['', Validators.required],
    reviews: [0],
    price: [null, Validators.required],
    quantity: [null, Validators.required],
    imageId: ['', Validators.required],
    imageUrl: ['']
  });
}
