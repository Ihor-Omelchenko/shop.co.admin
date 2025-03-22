import { ProductEntity } from '@app/data/entities';
import { ProductDto } from '@app/data/dto';

export class ProductMapper {
  static toProduct(dto: ProductDto): ProductEntity {
    return new ProductEntity(dto);
  }
}
