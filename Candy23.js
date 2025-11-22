// 編號：CANDY-023
// 程式語言：JavaScript
// 題目：算出 N 個數字的最大公因數

function calcGCD(...numbers) {
  //導入求最大公因數的函數：輾轉相除法gcd
  function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
  }

  // 如果沒傳入任何數字
  if (numbers.length === 0) return 0;
  // 先放入第一個數字
  let result = numbers[0];
  // 從第二個數字開始，依序算 gcd
  for (let i = 1; i < numbers.length; i++) {
    result = gcd(result, numbers[i]);
  }

  return result;
}

console.log(calcGCD(10)); // 10
console.log(calcGCD(103, 27)); // 1
console.log(calcGCD(21, 15, 18)); // 3
console.log(calcGCD(104, 96, 36, 88)); // 4
