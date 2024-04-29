class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = []; // New stack for minimums
  }

  push(val) {
    this.stack.push(val);

    const currentMin =
      this.minStack.length === 0
        ? val
        : Math.min(val, this.minStack[this.minStack.length - 1]);
    this.minStack.push(currentMin);
  }

  pop() {
    this.stack.pop();
    this.minStack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

let x = new MinStack();
x.push(2);
console.log(x.stack, x.minStack);
x.push(0);
console.log(x.stack, x.minStack);
x.push(3);
console.log(x.stack, x.minStack);
x.push(0);
console.log(x.stack, x.minStack);
x.pop();
console.log(x.stack, x.minStack);
x.pop();
console.log(x.stack, x.minStack);
x.pop();
console.log(x.stack, x.minStack);
// console.log(x.getMin());
