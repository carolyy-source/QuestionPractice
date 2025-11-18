// 編號：CANDY-021
// 程式語言：JavaScript
// 題目：實作 Stack 資料結構

class Stack {
  constructor() {
    this.items = [];
  }
  push(value) {
    // 如果沒有給參數，直接忽略
    if (value === undefined) return;
    this.items.push(value);
  }
  pop() {
    /*
    pop()移除陣列最後一個元素,回傳被移除的那個值
    如果是空的，Array.pop() 本來就會回傳 undefined
    */
    return this.items.pop();
  }
  get size() {
    return this.items.length;
  }
}

const stack = new Stack();
stack.push(123);
stack.push(456);
stack.push();
console.log(stack.size); // 印出 2

const item = stack.pop(); // 取出元素
console.log(item); // 印出 456

stack.pop(); // 繼續取出元素
console.log(stack.size); // 印出 0
