// 編號：CANDY-005
// 程式語言：JavaScript
// 題目：完成函數的內容，把傳進去的數字的每個位數平方之後組合在一起

function squareDigits(num) {
  //將輸入的數字改成字串
  let string = num.toString();
  //將字串拆成單一字元後，轉成數字做平方
  let squaredArr = string.split('').map(digit => {
  let n = Number(digit);
  return n * n;
  });

  //將結果先合併成只有數字的字串，再轉回數字
  return Number(squaredArr.join(''));
}

console.log(squareDigits(3212)); // 印出 9414
console.log(squareDigits(2112)); // 印出 4114
console.log(squareDigits(387)); // 印出 96449