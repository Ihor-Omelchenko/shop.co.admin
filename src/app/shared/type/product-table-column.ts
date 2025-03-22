import { ProductEntity } from '@app/data/entities';

export type ProductTableColumn = {
  field: string;
  name: string;
  isActive: boolean;
  order: number;
  value(data: ProductEntity): string | number | boolean;
}
