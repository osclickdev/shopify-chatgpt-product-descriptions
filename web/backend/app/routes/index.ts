import { type Router } from 'express';
import { glob } from 'glob';
import path from 'path';

export function registerRoutes (router: Router): void {
  const srcDir = path.join(__dirname);
  const routes = glob.sync(`${srcDir}/**/*.route.*`);
  // eslint-disable-next-line array-callback-return
  routes.map(route => { register(route, router); });
}

function register (routePath: string, router: Router): void {
  // eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires
  const { register } = require(routePath) as { register: (router: Router) => void };
  register(router);
}
