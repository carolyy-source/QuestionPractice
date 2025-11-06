// 編號：CANDY-011
// 程式語言：JavaScript
// 題目：找出一個數字陣列裡，出現奇數次數的數字
// 範例：[1, 1, 0]，`0` 只有出現 1 次
//      [5, 5, 8, 8, 8, 4, 4]，`8` 出現了 3  次

function findOddElm(numbers) {
  //記錄每個數字出現幾次
  const count = {};
  numbers.forEach((num) => {
    if(count[num]){
     count[num]++;
    }
    else {
    // 如果是第一次出現，就設成 1
    count[num] = 1;
    }
  });
    //找出次數是奇數的數字
    for (let num in count) {
    if (count[num] % 2 !== 0) {
      //將字串轉回數字
      return Number(num); 
    }
  }
}

console.log(findOddElm([1, 1, 2])); // 印出 2
console.log(findOddElm([5, 4, 2, 1, 5, 4, 2, 10, 10])); // 印出 1
console.log(findOddElm([0, 1, 0, 1, 0])); // 印出 0
console.log(findOddElm([1, 1, 2, -2, 5, 2, -1, -2, 5])); // 印出 -1
console.log(findOddElm([20, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])); // 印出 5
