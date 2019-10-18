'use strict';
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  push(value) {
    if (!value) return undefined;
    let node = new Node(value);
    if (this.length === 0) {
      this.first = node;
      this.last = node;
    } else {
      let first = this.first;
      this.last = node;
      while (first.next) {
        first = first.next;
      }
      first.next = node;
    }
    this.length += 1;
    return this;
  }
  pop() {
    if (this.length === 0) return undefined;
    let node = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.length -= 1;
    return node;
  }
}
module.exports = Queue;
