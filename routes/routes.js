import Router from 'koa-joi-router';
import compose from 'koa-compose';

import indexRouter from './index';

const router = new Router();

const routers = compose([
    indexRouter.middleware(),
]);

export default routers;