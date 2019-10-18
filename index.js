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
    this.size = 0;
  }
  push(value) {
    if (!value) return undefined;
    let node = new Node(value);
    if (this.size === 0) {
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
    this.size += 1;
    return this.size;
  }
  pop() {
    if (this.size === 0) return undefined;
    let node = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.size -= 1;
    return node.value;
  }
}
module.exports = Queue;
