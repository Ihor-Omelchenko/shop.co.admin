import { ProductListComponent, UserListComponent } from '@app/application/pages';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'product-list',
    component: ProductListComponent
  },
  {
    path: 'user-list',
    component: UserListComponent
  },
];
