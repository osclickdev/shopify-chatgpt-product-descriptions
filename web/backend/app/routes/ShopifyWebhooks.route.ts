import { type Request, type Response, type Router } from 'express';

import shopify from '../../lib/shopify';
import GDPRWebhookHandlers from '../../lib/gdpr';

export const register = (router: Router): void => {
  // TODO. Process all webhooks by glob
  router.post(shopify.config.webhooks.path, (req: Request, res: Response) => {
    console.log('registering webhooks...');
    shopify.processWebhooks({ webhookHandlers: GDPRWebhookHandlers });
  });
};
