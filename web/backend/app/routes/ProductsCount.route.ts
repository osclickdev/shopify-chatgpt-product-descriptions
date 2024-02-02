import { type Request, type Response, type Router } from 'express';
import { type ProductsCountController } from '../controllers/ProductsCountController';
import container from '../dependency-injection';

export const register = (router: Router): void => {
  const controller: ProductsCountController = container.get(
    'app.controller.ProductsCountController'
  );
  router.get('/api/products/count', (req: Request, res: Response): void => {
    void controller.execute(req, res);
  });
};
