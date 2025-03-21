import { AdminDto } from '@app/data/dto';

export class AdminEntity {
  constructor(protected readonly source: AdminDto) {}

  get id(): string {
    return this.source._id;
  }

  get userName(): string {
    return this.source.adminName;
  }

  get role(): string {
    return this.source.role;
  }

  get createDate(): string {
    return new Date(this.source.createdAt).toLocaleString('uk-UA');
  }

  get updateDate(): string {
    return new Date(this.source.updatedAt).toLocaleString('uk-UA');
  }

}
