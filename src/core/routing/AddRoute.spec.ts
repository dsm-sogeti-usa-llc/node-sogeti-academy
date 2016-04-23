import * as express from 'express';
import * as sinon from 'sinon';
import * as chai from 'chai';
import * as sinonChai from 'sinon-chai';
import {addRoute, Route} from './Route';
const expect = chai.expect;
chai.use(sinonChai);

describe('AddRoute', () => {
    it('should add route to app', () => {
        const route: Route = {
            method: 'get',
            path: '/stuff',
            handler: () => {}
        };
        
        const app = createApp();
        sinon.stub(app);
        addRoute(app, route);
        expect(app.get).to.have.been.calledWith(route.path, route.handler);
    });
    
    function createApp(): express.Application {
        const app: express.Application = <any>{
            get: (path: string, ...handler: express.RequestHandler[]) => {
                
            }
        };
        return app; 
    }
});