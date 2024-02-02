import { type Request, type Response, type Router } from 'express';
import { join } from 'path';
import { readFileSync } from 'fs';
import shopify from '../../lib/shopify';

export const register = (router: Router): void => {
  const STATIC_PATH =
    process.env.NODE_ENV === 'production'
      ? `${process.cwd()}/../frontend/dist`
      : `${process.cwd()}/../frontend/`;

  router.get('/*',
    shopify.ensureInstalledOnShop(),
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    async (req: Request, res: Response) => {
      return res
        .status(200)
        .set('Content-Type', 'text/html')
        .send(readFileSync(join(STATIC_PATH, 'index.html')));
    });
};
