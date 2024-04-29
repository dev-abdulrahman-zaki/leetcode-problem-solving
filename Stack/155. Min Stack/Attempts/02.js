class MinStack {
  constructor() {
    this.stack = [];
    this.min = undefined;
    // this.prevMin = undefined;
  }
  push(val) {
    this.stack.push(val);
    if (this.min) {
    //   this.prevMin = this.min;
      this.min = Math.min(val, this.min);
    } else {
      this.min = val;
    }
  }
  pop() {
    let poped = this.stack.pop();
    this.min = Math.min(poped, this.min);
  }
  top() {
    return this.stack[this.stack.length - 1];
  }
  getMin() {
    return this.min;
  }
}