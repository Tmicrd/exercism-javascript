//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class LinkedList {
  constructor() {
    this.list = new Array();
  }
  push(value) {
    this.list.push(value);
  }
  pop() {
    return this.list.pop();
  }
  shift() {
    return this.list.shift();
  }
  unshift(value) {
    this.list.unshift(value);
  }
  delete(value) {
    const indexOfValue = this.list.indexOf(value);
    if (indexOfValue === -1) return;
    this.list.splice(indexOfValue, 1);
  }
  count() {
    return this.list.length;
  }
}
