import { type Request, type Response } from 'express';
import { type ProductsCounter } from '../../src/products/application/counter/ProductsCounter';
import { type Controller } from './Controller';

export class ProductsCountController implements Controller {
  constructor (private readonly productsCounter: ProductsCounter) {}

  async execute (req: Request, res: Response): Promise<void> {
    res.send({ count: this.productsCounter.count() });
  }
}
