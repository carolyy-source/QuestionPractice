// 編號：CANDY-013
// 程式語言：JavaScript
// 題目：根據台灣財政部所提供的公司統編驗證規則，計算統一編號是否正確
// https://www.fia.gov.tw/singlehtml/3?cntId=c4d9cff38c8642ef8872774ee9987283

function isValidVatNumber(vat) {
  //將輸入的數字改成數字元的陣列
  let num = vat.split("").map(Number); //=>[1, 0, 4, 5, 8, 5, 7, 5]
  const verify = [1, 2, 1, 2, 1, 2, 4, 1];
  //先得到乘積
  const cal = num.map((num, index) => num * verify[index]); //=>[1, 0, 4, 10, 8, 10, 28, 5]
  //將乘積的值調整至個位數
  for (let i = 0; i < cal.length; i++) {
    while (cal[i] > 9) {
      //用Math.floor取整數
      cal[i] = Math.floor(cal[i] / 10) + (cal[i] % 10);
    }
  }
  //=>[1, 0, 4, 1, 8, 1, 1, 5]
  //取得乘積之和
  const result = cal.reduce((x, y) => x + y, 0); //21

  //驗證第七位數非7的統編
  if (num[6] !== 7) {
    return result % 5 === 0;
  }
  //驗證第七位數是7的統編
  else {
    return result % 5 == 0 || result % 5 == 1;
  }
}

console.log(isValidVatNumber("10458575")); // true
console.log(isValidVatNumber("88117125")); // true
console.log(isValidVatNumber("53212539")); // true
console.log(isValidVatNumber("88117126")); // false
