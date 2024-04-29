class MinStack {
  constructor() {
    this.stack = [];
    this.min = undefined;
    this.prevMin = undefined;
  }

  push(val) {
    this.stack.push(val);

    if (this.min !== undefined) {
      let temp = this.min;

      if (this.prevMin === undefined) {
        this.prevMin = this.min;
      }

      this.min = Math.min(val, this.min);
      this.prevMin = temp;
    } else {
      this.min = val;
    }
  }

  pop() {
    // let poped = this.stack.pop();
    // if (poped === this.min) {
    //   this.min = this.prevMin;
    //   this.prevMin = undefined; // Reset prevMin if popped was the minimum
    // }
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.min;
  }
}

let x = new MinStack();
x.push(2);
x.push(0);
x.push(3);
x.push(0);
x.pop();
x.pop();
x.pop();
console.log(x.stack);
console.log(x.getMin());
