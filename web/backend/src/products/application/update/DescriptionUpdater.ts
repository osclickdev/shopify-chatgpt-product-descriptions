import { type ProductRepository } from '../../domain/ProductRepository';

export class DescriptionUpdater {
  constructor (private readonly productRepository: ProductRepository) {}

  async run (productId: string, description: string): Promise<void> {
    this.productRepository.updateDescription(productId, description);
  }
}
