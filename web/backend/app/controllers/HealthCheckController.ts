import { type Request, type Response } from 'express';
import { type Controller } from './Controller';

export class HealthCheckController implements Controller {
  execute (_req: Request, res: Response): void {
    res.send({ status: 'ok' });
  }
}
