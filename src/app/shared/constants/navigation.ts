import { MenuItem } from 'primeng/api';

export const navigation: Array<MenuItem> = [
  {
    label: 'Product',
    icon: 'pi pi-shopping-cart',
    items: [
      {
        label: 'Product list',
        icon: 'pi pi-list',
        routerLink: '/product-list',
      },
    ]
  },
  {
    label: 'User',
    icon: 'pi pi-user',
    items: [
      {
        label: 'User list',
        icon: 'pi pi-list',
        routerLink: '/user-list',
      },
      {
        label: 'Admin list',
        icon: 'pi pi-list',
        routerLink: '/admin-list',
      },
    ]
  },
]
