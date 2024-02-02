import { type ProductRepository } from '../../domain/ProductRepository';

export class ShopifyProductRepository implements ProductRepository {
  async updateDescription (productId: string, description: string): Promise<void> {
    console.log('Aquí actualizaremos la descripción!');
    // TODO. Implementar la actualización de la descripción en Shopify
  }

  count (): number {
    return 200;
  }
}
