// 編號：CANDY-009
// 程式語言：JavaScript
// 題目：移除網址中的錨點（Anchor）

function removeAnchor(url) {
  // //將輸入的網址改成字串
  // const string = url.toString();
  // //將字串拆成單一字元陣列後，檢查有沒有錨點
  // const singleWord = string.split("");
  // for (let i = 0; i < singleWord.length; i++) {
  //   if (singleWord[i] === "#") {
  //     //找到錨點前的網址，並轉回字串
  //     const target = singleWord.slice(0, i).join("");
  //     return target;
  //   }
  // return url;
    //v2 將網址以錨點分為前後
  return url.split("#")[0];
}

console.log(removeAnchor("5xcampus.com")); // 印出 5xcampus.com
console.log(removeAnchor("5xcampus.com/#about")); // 印出 5xcampus.com/
console.log(removeAnchor("5xcampus.com/courses/?page=1#about")); // 印出 5xcampus.com/courses/?page=1
