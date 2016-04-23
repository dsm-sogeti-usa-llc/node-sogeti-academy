import * as http from 'http';
import {expect} from 'chai';

describe('Startup', () => {
    let startup: { close: () => void };
    
    before(() =>{
        startup = require('./startup');    
    });
    
    it('should setup health endpoint', (done) => {
        http.get('http://localhost:5050/health', (res) => {
            expect(res.statusCode).to.equal(200);
            done();
        });      
    });
    
    after(() => {
        startup.close();
    })
});