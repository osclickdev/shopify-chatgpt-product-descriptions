import { type Request, type Response } from 'express';

export interface Controller {
  execute: (req: Request, res: Response) => Promise<void> | void
}
