import { type ProductRepository } from '../../domain/ProductRepository';

export class ProductNameFinder {
  constructor (private readonly repository: ProductRepository) {}

  async find (productId: string): Promise<string> {
    return await this.repository.findName(productId);
  }
}
