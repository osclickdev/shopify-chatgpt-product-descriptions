import { type Request, type Response, type Router } from 'express';
import container from '../dependency-injection';
import { type ProductsController } from '../controllers/ProductsController';

export const register = (router: Router): void => {
  const controller: ProductsController = container.get('app.controller.ProductsController');
  router.post('/api/product/ai/description', (req: Request, res: Response): void => {
    void controller.execute(req, res);
  });
};
