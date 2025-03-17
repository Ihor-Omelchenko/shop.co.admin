import { AdminListComponent, LoginComponent, ProductListComponent, UserListComponent } from '@app/application/pages';
import { authGuard } from '@app/application/providers/guards/auth.guard';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'product-list',
    pathMatch: 'full'
  },
  {
    path: 'product-list',
    component: ProductListComponent
  },
  {
    path: 'admin-list',
    component: AdminListComponent
  },
  {
    path: 'user-list',
    component: UserListComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];
