// @ts-check
import express from 'express';
import bodyParser from 'body-parser';
import { registerRoutes } from './routes';
import Router from 'express-promise-router';
import shopify from '../lib/shopify';

const PORT = parseInt(process.env.BACKEND_PORT ?? '', 10);
const app = express();
const router = Router();
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
registerRoutes(router);
app.use(bodyParser.urlencoded({ extended: false }));

app.get(shopify.config.auth.path, shopify.auth.begin());
app.get(
  shopify.config.auth.callbackPath,
  shopify.auth.callback(),
  shopify.redirectToShopifyOrAppRoot()
);

if (process.env.NODE_ENV === 'production') {
  app.use('/assets', express.static(`${process.cwd()}/../frontend/dist/assets`));
}

app.use('/api/*', shopify.validateAuthenticatedSession());
app.use(express.json());
app.use(router);

app.listen(PORT);

export default app;
