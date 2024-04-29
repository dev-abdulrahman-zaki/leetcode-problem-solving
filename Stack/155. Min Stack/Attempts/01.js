class MinStack {
  constructor() {
    this.stack = [];
    this.min = undefined;
    this.prevMin = undefined;
  }
  push(val) {
    this.stack.push(val);
    if (this.min !== undefined) {
      //   let temp = this.min;
      this.min = Math.min(val, this.min);
      //   if (this.prevMin !== undefined){
      //     this.prevMin = Math.min(this.prevMin, temp);
      //   }
      //   else{
      //     this.prevMin = this.min;
      //   }
    } else {
      this.min = val;
    }
  }
  pop() {
    let poped = this.stack.pop();
    this.stack.pop();
    if (poped === this.min){
        
    }
    this.min = this.prevMin;
  }
  top() {
    return this.stack[this.stack.length - 1];
  }
  getMin() {
    return this.min;
  }
}
