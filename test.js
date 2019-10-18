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
  describe('enqueue Method', () => {
    it('queue size should be 0 when queue is empty', () => {
      let queue = new Queue();
      queue.size.should.be.equals(0);
      (queue.dequeue() === undefined).should.be.equals(true);
    });
    it('queue size should be 1 when queue has one element', () => {
      let queue = new Queue();
      queue.enqueue(1);
      (queue.size == 1).should.be.equals(true);
    });
    it('queue enqueue method should enqueue element at the end of the queue', () => {
      let queue = new Queue();
      (queue.enqueue(1) === 1).should.be.equals(true);
      (queue.enqueue(10) === 2).should.be.equals(true);
      (queue.enqueue(40) === 3).should.be.equals(true);
      (queue.enqueue() === undefined).should.be.equals(true);
    });
  });
  describe('dequeue Method', () => {
    it('queue dequeue method should dequeue element from the end of the queue', () => {
      let queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      console.log(queue);
      (queue.dequeue() == 1).should.be.equals(true);
      (queue.dequeue() == 2).should.be.equals(true);
    });
  });
});
