import { type Request, type Response } from 'express';
import { type Controller } from './Controller';
import { type DescriptionUpdater } from '../../src/products/application/update/DescriptionUpdater';

export class ProductsController implements Controller {
  constructor (private readonly descriptionUpdater: DescriptionUpdater) {}

  async execute (req: Request, res: Response): Promise<void> {
    const productId: string = req.body.product_id;
    await this.descriptionUpdater.run(productId, 'Descripción actualizada!');
    res.send({ });
  }
}
