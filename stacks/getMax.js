class MaxStack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (!this.items.length) {
      return null;
    }
    return this.items.pop();
  }

  getMax() {
    if (!this.items.length) {
      return null;
    }
    return Math.max(...this.items);
  }
}
