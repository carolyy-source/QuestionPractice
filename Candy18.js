// 編號：CANDY-018
// 程式語言：JavaScript
// 題目：實作一個可以印出隨機整數的函數

function randomNumber(min, max) {
  //最大值=max-1
  //若只輸入一個數字，將範圍當作“0~最大值”
  if (max === undefined) {
    max = min;
    min = 0;
  }

  //用Math.floor取整數，Math.random()產出0~兩數字之差的範圍，+min補上最小值與0的差距
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(randomNumber(50)); // 隨機印出 0 ~ 49 之間的任何一個數字
console.log(randomNumber(5, 30)); // 隨機印出 5 ~ 29 之間的任何一個數字
