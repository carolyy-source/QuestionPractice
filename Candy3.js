// 編號：CANDY-003
// 程式語言：JavaScript
// 題目：完成函數的內容，把陣列裡的 0 都移到最後面

let list = [false, 1, 0, -1, 2, 0, 1, 3, "a"];

function moveZerosToEnd(arr) {
  // 篩選出陣列裡的 0
  const listZero = arr.filter((e) => e === 0);
  // 排除 0 的陣列
  const listOri = arr.filter((e) => e !== 0);
  // 合併結果
  return listOri.concat(listZero);
}

let result = moveZerosToEnd(list);
console.log(result); // 印出 [false, 1, -1, 2, 1, 3, "a", 0, 0]