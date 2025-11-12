// 編號：CANDY-015
// 程式語言：JavaScript
// 題目：把原本的字串拆解成 2 個字元一組，若不足 2 個字則補上底線
// 範例：
//      "abcdef" -> ['ab', 'cd', 'ef']
//      "abcdefg" -> ['ab', 'cd', 'ef', 'g_']

function splitString(str) {
  const result = [];
  // 每隔2字元執行一次
  for (let i = 0; i < str.length; i += 2) {
    let mix = str[0] + (str[i] || "_");
    result.push(mix);
  }
  //若字串空白不會進入迴圈，直接回傳空陣列
  return result;
}

console.log(splitString("abcdef")); // ["ab", "cd", "ef"]
console.log(splitString("abcdefg")); // ["ab", "cd", "ef", "g_"]
console.log(splitString("")); // []
