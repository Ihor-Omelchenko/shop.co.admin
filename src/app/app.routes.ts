import { PageAdminComponent, LoginComponent, PageProductComponent, PageUserComponent, PageDashboardComponent } from '@app/application/pages';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: PageDashboardComponent,
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
