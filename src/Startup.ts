import * as express from 'express';
import {addRoute} from './core/routing/Route';
import {HealthRoute} from './health/HealthRoute';

const app = express();
addRoute(app, HealthRoute);

const server = app.listen(5050);

export function close(): void {
    server.close();
}