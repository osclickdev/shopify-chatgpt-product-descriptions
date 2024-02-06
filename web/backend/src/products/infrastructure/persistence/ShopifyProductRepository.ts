import { type ProductRepository } from '../../domain/ProductRepository';
import { type PrismaSessionStorage } from '../../../user/infrastructure/storage/PrismaSessionStorage';
import { type Session } from '@shopify/shopify-api';
import shopify from '../../../../lib/shopify';

export class ShopifyProductRepository implements ProductRepository {
  constructor (private readonly sessionStorage: PrismaSessionStorage) {}

  async updateDescription (productId: string, description: string): Promise<void> {
    const session: Session | undefined = await this.sessionStorage.currentSession();
    if (undefined === session) {
      return;
    }
    const client = new shopify.api.clients.Graphql({ session });
    const response = await client.query(
      {
        data: `mutation {
        productUpdate(input: {id: "${productId}", descriptionHtml: '${description}'}) {
          product {
            id
          }
        }
      }`
      }
    );

    const body: any = response.body;
    if (body.data?.productUpdate.product === null) {
      throw new Error('Failed to update description');
    }
  }

  async findName (productId: string): Promise<string> {
    const session: Session | undefined = await this.sessionStorage.currentSession();
    if (undefined === session) {
      throw new Error('Session not found');
    }
    const client = new shopify.api.clients.Graphql({ session });
    const response = await client.query(
      {
        data: `{
        product(id: "${productId}") {
          title
        }
      }`
      }
    );

    const body: any = response.body;
    return body?.data.product.title;
  }

  count (): number {
    return 200;
  }
}
