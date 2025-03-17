import { AdminEntity } from '@app/data/entities';
import { AdminDto } from '@app/data/dto';

export class AdminMapper {
  static toAdmin(dto: AdminDto): AdminEntity {
    return new AdminEntity(dto);
  }
}
