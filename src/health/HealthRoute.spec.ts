import {HealthRoute} from './HealthRoute';
import * as chai from 'chai';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';
import * as express from 'express';
const expect = chai.expect;
chai.use(sinonChai);

describe('HealthRoute', () => {
    it('should specify get method', () => {
        expect(HealthRoute.method).to.equal('get');
    });
    
    it('should specify health path', () => {
        expect(HealthRoute.path).to.equal('/health');
    });
    
    it('should have ok status', () => {
        const requestStub = sinon.stub();
        const response = createExpressResponse();
        sinon.stub(response);
        
        HealthRoute.handler(<any>requestStub, response, () => {});
        expect(response.json).to.have.been.calledWith({ status: 'ok' });
        expect(response.end).to.have.been.calledWith();
    });
    
    function createExpressResponse(): express.Response {
        const response: express.Response = <any>{
            json: (body: any) => {
                return response;
            },
            end: () => {}
        }
        return response;
    }
});