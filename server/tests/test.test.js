import chai from 'chai';
import app from '../index';

const { expect } = chai;
chai.should();

describe('Initial test', () => {
  describe('Is server running', () => {
    it('App servered should be a function', () => {
      expect(app).to.be.a('function');
    });
  });
});
