import { PageAdminComponent, LoginComponent, PageProductComponent, PageUserComponent } from '@app/application/pages';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'page-product',
    pathMatch: 'full'
  },
  {
    path: 'page-product',
    component: PageProductComponent
  },
  {
    path: 'page-admin',
    component: PageAdminComponent
  },
  {
    path: 'page-user',
    component: PageUserComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];
