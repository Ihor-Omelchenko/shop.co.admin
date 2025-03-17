import { AdminEntity } from '@app/data/entities';

export type AdminTableColumn = {
  field: string;
  name: string;
  isActive: boolean;
  order: number;
  value(data: AdminEntity): string | number | boolean;
}
