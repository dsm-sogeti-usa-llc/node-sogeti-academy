import {Route} from '../core/routing/Route';
import * as express from 'express';

export const HealthRoute: Route = {
    method: 'get',
    path: '/health',
    handler: (req: express.Request, res: express.Response) => {
        res.json({ status: 'ok' });
        res.end();
    }
};