import { environment } from '@libs/environments';
import { ProductDto } from '@app/data/dto';

export class ProductEntity {
  constructor(protected readonly source: ProductDto) {}

  get productId(): string {
    return this.source._id;
  }

  get productName(): string {
    return this.source.title;
  }

  get productCategory(): string {
    return this.source.category;
  }

  get productReviews(): number {
    return this.source.reviews;
  }

  get productStatus(): string {
    return this.source.status;
  }

  get productDescription(): string {
    return this.source.description;
  }

  get productPrice(): number {
    return this.source.price;
  }

  get productImage(): string {
    return environment.API_URL + this.source.imageUrl;
  }

  get productCreateDate(): string {
    return new Date(this.source.createdAt).toLocaleString('uk-UA');
  }

  get productUpdateDate(): string {
    return new Date(this.source.updatedAt).toLocaleString('uk-UA');
  }
}
