import { AdminTableColumn } from '@shared/type';
import { AdminEntity } from '@app/data/entities';

export const AdminTableColumns: Array<AdminTableColumn> = [
  {
    field: 'id',
    name: 'ID',
    isActive: false,
    order: 1,
    value: (data: AdminEntity) => data.id
  },
  {
    field: 'userName',
    name: 'User name',
    isActive: false,
    order: 2,
    value: (data: AdminEntity) => data.userName
  },
  {
    field: 'role',
    name: 'Role',
    isActive: false,
    order: 3,
    value: (data: AdminEntity) => data.role
  },
  {
    field: 'createDate',
    name: 'Date of create',
    isActive: false,
    order: 4,
    value: (data: AdminEntity) => data.createDate
  },
  {
    field: 'updateDate',
    name: 'Date of last update',
    isActive: false,
    order: 5,
    value: (data: AdminEntity) => data.updateDate
  },
]
