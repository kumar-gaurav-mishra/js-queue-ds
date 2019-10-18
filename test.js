'use strict';
const chai = require('chai');
chai.should();
let Queue = require('./index');
describe('Queue', () => {
  describe('Instantiation', () => {
    let queue = new Queue();
    it('queue should be object', () => {
      (typeof queue === 'object').should.be.equals(true);
    });
    it('queue should be instance of Queue', () => {
      (queue instanceof Queue).should.be.equals(true);
    });
  });
  describe('Push Method', () => {
    it('queue size should be 0 when queue is empty', () => {
      let queue = new Queue();
      queue.size.should.be.equals(0);
      (queue.pop() === undefined).should.be.equals(true);
    });
    it('queue size should be 1 when queue has one element', () => {
      let queue = new Queue();
      queue.push(1);
      (queue.size == 1).should.be.equals(true);
    });
    it('queue push method should push element at the end of the queue', () => {
      let queue = new Queue();
      (queue.push(1) === 1).should.be.equals(true);
      (queue.push(10) === 2).should.be.equals(true);
      (queue.push(40) === 3).should.be.equals(true);
      (queue.push() === undefined).should.be.equals(true);
    });
  });
  describe('Pop Method', () => {
    it('queue pop method should pop element from the end of the queue', () => {
      let queue = new Queue();
      queue.push(1);
      queue.push(2);
      (queue.pop() == 1).should.be.equals(true);
      (queue.pop() == 2).should.be.equals(true);
    });
  });
});
