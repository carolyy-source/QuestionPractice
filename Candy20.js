// 編號：CANDY-020
// 程式語言：JavaScript
// 題目：檢查字串的 x 跟 o 的數量是不是一樣多，不分大小寫

function xxoo(str) {
  // 分別計算o.x的數量
  let numberForX = 0;
  let numberForO = 0;
  for (let i = 0; i < str.length; i++) {
    //把字串全部轉為小寫
    const ch = str[i].toLowerCase();
    if (ch === "x") {
      numberForX++;
    } else if (ch === "o") {
      numberForO++;
    }
  }
  return numberForX === numberForO;
}

console.log(xxoo("ooxx")); // true
console.log(xxoo("xxoo")); // true
console.log(xxoo("xxooo")); // false
console.log(xxoo("xoox")); // true
console.log(xxoo("ooAA")); // false
console.log(xxoo("xoXoA")); // true
