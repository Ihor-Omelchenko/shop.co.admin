import { ProductEntity } from '@app/data/entities';
import { ProductTableColumn } from '@shared/type';

export const ProductTableColumns: Array<ProductTableColumn> = [
  {
    field: 'productId',
    name: 'ID',
    isActive: false,
    order: 1,
    value: (data: ProductEntity) => data.productId
  },
  {
    field: 'productName',
    name: 'Title',
    isActive: false,
    order: 2,
    value: (data: ProductEntity) => data.productName
  },
  {
    field: 'productImage',
    name: 'Image',
    isActive: false,
    order: 3,
    value: (data: ProductEntity) => data.productImage
  },
  {
    field: 'productPrice',
    name: 'Price',
    isActive: false,
    order: 4,
    value: (data: ProductEntity) => data.productPrice
  },
  {
    field: 'productCategory',
    name: 'Category',
    isActive: false,
    order: 5,
    value: (data: ProductEntity) => data.productCategory
  },
  {
    field: 'productReviews',
    name: 'Reviews',
    isActive: false,
    order: 6,
    value: (data: ProductEntity) => data.productReviews
  },
  {
    field: 'productStatus',
    name: 'Status',
    isActive: false,
    order: 7,
    value: (data: ProductEntity) => data.productStatus
  },
  {
    field: 'productCreateDate',
    name: 'Create Date',
    isActive: false,
    order: 8,
    value: (data: ProductEntity) => data.productCreateDate
  },
  {
    field: 'productUpdateDate',
    name: 'Update Date',
    isActive: false,
    order: 9,
    value: (data: ProductEntity) => data.productUpdateDate
  }
]
