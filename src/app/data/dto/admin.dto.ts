import { role } from '@shared/type';

export type AdminDto = {
  password: string;
  role: role;
  adminName: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  _id: string;
}
