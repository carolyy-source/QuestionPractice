// 編號：CANDY-024
// 程式語言：JavaScript
// 題目：算出 N 個數字的最小公倍數
// 提示：可使用 023 計算最大公因數的函數

function calcLCM(...numbers) {
  // 最小公倍數=兩數乘績/最大公因數
  // 最大公因數函數
  function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
  }
  /*
  最小公倍數函數;
  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }*/
  if (numbers.length === 0) return 0;
  if (numbers.length === 1) return numbers[0];

  // 先放入第一個數字
  let result = numbers[0];
  // 從第二個數字開始，依序算 gcd
  for (let i = 1; i < numbers.length; i++) {
    result = (result * numbers[i]) / gcd(result, numbers[i]);
  }

  return result;
}

console.log(calcLCM(10)); // 10
console.log(calcLCM(103, 27)); // 2781
console.log(calcLCM(21, 15, 18)); // 630
console.log(calcLCM(104, 96, 36, 88)); // 41184
