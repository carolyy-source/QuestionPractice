// 編號：CANDY-012
// 程式語言：JavaScript
// 題目：把數字加總，最終濃縮成個位數
// 範例：9527 => 9 + 5 + 2 + 7 => 23 => 2 + 3 => 5
//      1450 => 1 + 4 + 5 + 0 => 10 => 1 + 0 => 1

const numberReducer = (num) => {
  // 將數字轉完陣列
  const digits = num.toString().split(""); // ["9","5","2","7"]
  //再將陣列轉為“單一數字”保存
  const number = digits.map(d => Number(d));// [9,5,2,7]
  //用reduce做累加
  const result = number.reduce(function (x, y) {
  return x + y;
  }, 0);
  //總合還不是個位數，就繼續執行
  if(result>9){
    return numberReducer(result);
  }
  return result;
 };

console.log(numberReducer(9527)); // 印出 5
console.log(numberReducer(1450)); // 印出 1
console.log(numberReducer(5566108)); // 印出 4
console.log(numberReducer(1234567890)); // 印出 9
