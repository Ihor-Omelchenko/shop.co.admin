import { TableProductsComponent } from '@app/application/features';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
  imports: [ TableProductsComponent ]
})
export class ProductListComponent {

}
