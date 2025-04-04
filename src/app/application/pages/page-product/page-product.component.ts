import { ListProductComponent } from '@app/application/features';
import { PrimengModules } from '@shared/constants';
import { Component } from '@angular/core';

@Component({
  selector: 'app-page-product',
  standalone: true,
  templateUrl: './page-product.component.html',
  styleUrl: './page-product.component.scss',
  imports: [ ListProductComponent, PrimengModules ]
})
export class PageProductComponent {

}
