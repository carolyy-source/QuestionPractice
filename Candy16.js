// 編號：CANDY-016
// 程式語言：JavaScript
// 題目：把原本 snake_case 的字轉換成 camelCase 格式
// 範例："hello_world" -> "helloWorld"

function toCamelCase(str) {
  //用 "_" 拆開字串，並轉為陣列
  const string = str.split("_");
  //將第二個以後的單字，首字母改成大寫
  for (let i = 1; i < string.length; i++) {
    string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
  }
  return string.join("");

  //寫法2
  // return str
  //   .split("_")
  //   .map((word, index) =>
  //     index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
  //   )
  //   .join("");
}

console.log(toCamelCase("book")); // book
console.log(toCamelCase("book_store")); // bookStore
console.log(toCamelCase("get_good_score")); // getGoodScore
