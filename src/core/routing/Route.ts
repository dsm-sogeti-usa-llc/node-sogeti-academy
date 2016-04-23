import * as express from 'express';

export interface Route {
    method: string;
    path: string;
    handler: express.RequestHandler
}

export function addRoute(app: express.Application, route: Route): void {
    app[route.method](route.path, route.handler);
}