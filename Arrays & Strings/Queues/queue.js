class QueueTwoStacks {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.unshift(item);
  }

  dequeue() {
    if (!this.items) return null;
    return this.items.pop();
  }
}
