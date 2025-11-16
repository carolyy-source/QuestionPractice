// 編號：CANDY-019
// 程式語言：JavaScript
// 題目：檢查是否為某個數字的平方數

function isSquare(num) {
  // 先排除負數
  if (num < 0) return false;
  /*
  for (let i = 0; i <= num; i++) {
    if (num === i * i) {
      return true;
    }
  }
  return false;
  */
  //直接判斷平方根是否為整數
  return Number.isInteger(Math.sqrt(num));
}

console.log(isSquare(0)); // true
console.log(isSquare(4)); // true
console.log(isSquare(5)); // false
console.log(isSquare(100)); // true
console.log(isSquare(-4)); // false
console.log(isSquare(-1)); // false
