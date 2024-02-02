import { type ProductRepository } from '../../domain/ProductRepository';

export class ProductsCounter {
  constructor (private readonly productRepository: ProductRepository) {
  }

  count (): number {
    return this.productRepository.count();
  }
}
