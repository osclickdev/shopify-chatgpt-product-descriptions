import { type Request, type Response, type Router } from 'express';

import { type HealthCheckController } from '../controllers/HealthCheckController';
import container from '../dependency-injection';

export const register = (router: Router): void => {
  const controller = container.get<HealthCheckController>(
    'app.controller.HealthCheckController'
  );
  router.get('/health-check', (req: Request, res: Response) => {
    controller.execute(req, res);
  });
};
