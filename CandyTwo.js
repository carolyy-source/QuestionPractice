// 編號：CANDY-002
// 程式語言：JavaScript
// 題目：請寫一小段程式，印出連續陣列裡缺少的字元
// 提示：
// 可使用字串的 charCodeAt 方法...

const chars1 = ["a", "b", "c", "d", "f", "g"];
const chars2 = ["O", "Q", "R", "S"];

/*console.log(chars1[1].charCodeAt(0));
表示chars1 第"1"個元素的第 '0' 個位置的字元對應的編碼
*/

/* 
獲取字符 'a' 的 Unicode 編碼
let code = 'a'.charCodeAt(0); // code 的值為 97
使用 fromCharCode 將編碼轉換回字串
let char = String.fromCharCode(code); // char 的值為 'a'
*/

function missingChar(chars) {
  for (i = 0; i < chars.length - 1; i++) {
    let current = chars[i].charCodeAt(0);
    let next = chars[i + 1].charCodeAt(0);

    if (next - current > 1) {
      return String.fromCharCode(current + 1);
    }
  }
  return "沒有少";
}

console.log(missingChar(chars1)); // 印出 e
console.log(missingChar(chars2)); // 印出 P
