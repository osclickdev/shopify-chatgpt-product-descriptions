import { type Request, type Response } from 'express';
import { type Controller } from './Controller';
import { type DescriptionUpdater } from '../../src/products/application/update/DescriptionUpdater';
import { type DescriptionFinder } from '../../src/products/application/find/DescriptionFinder';
import { type ProductNameFinder } from '../../src/products/application/find/ProductNameFinder';

export class ProductsController implements Controller {
  constructor (
    private readonly productNameFinder: ProductNameFinder,
    private readonly descriptionFinder: DescriptionFinder,
    private readonly descriptionUpdater: DescriptionUpdater
  ) {}

  async execute (req: Request, res: Response): Promise<void> {
    const productIds: string[] = req.body.productIds;
    for (const productId of productIds) {
      const productName: string = await this.productNameFinder.find(productId);
      const description: string | null = await this.descriptionFinder.find(productName);
      console.log(description);
      if (description === null) {
        continue;
      }
      await this.descriptionUpdater.run(productId, description);
    }
    res.send({ });
  }
}
