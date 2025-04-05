import { ProductEntity } from '@app/data/entities';
import { ProductTableColumn } from '@shared/type';

export const ProductTableColumns: Array<ProductTableColumn> = [
  {
    field: 'productId',
    name: 'ID',
    isActive: false,
    order: 1,
    value: (data: ProductEntity): string => data.productId
  },
  {
    field: 'productName',
    name: 'Title',
    isActive: false,
    order: 2,
    value: (data: ProductEntity): string => data.productName
  },
  {
    field: 'productImage',
    name: 'Image',
    isActive: false,
    order: 3,
    value: (data: ProductEntity): string => data.productImage
  },
  {
    field: 'productPrice',
    name: 'Price',
    isActive: false,
    order: 4,
    value: (data: ProductEntity): number => data.productPrice
  },
  {
    field: 'productCategory',
    name: 'Category',
    isActive: false,
    order: 5,
    value: (data: ProductEntity): string => data.productCategory
  },
  {
    field: 'productPetType',
    name: 'Pet Type',
    isActive: false,
    order: 6,
    value: (data: ProductEntity): string => data.productPetType
  },
  {
    field: 'productQuantity',
    name: 'Quantity',
    isActive: false,
    order: 7,
    value: (data: ProductEntity): number => data.productQuantity
  },
  {
    field: 'productStatus',
    name: 'Status',
    isActive: false,
    order: 8,
    value: (data: ProductEntity): string => data.productStatus
  },
  {
    field: 'productCreateDate',
    name: 'Create Date',
    isActive: false,
    order: 9,
    value: (data: ProductEntity): string => data.productCreateDate
  },
  {
    field: 'productUpdateDate',
    name: 'Update Date',
    isActive: false,
    order: 10,
    value: (data: ProductEntity): string => data.productUpdateDate
  }
]
