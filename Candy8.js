// 編號：CANDY-008
// 程式語言：JavaScript
// 題目：傳入一字串，計算得分最高的字
//      英文字母 a 得 1 分、b 得 2 分、c 得 3 分，以此類推。
//      所有傳入的字都是小寫。

function highestScoreWord(input) {
  //將輸入的字串分成單個單字
  const word = input.split(" ");
  let maxScore = 0;
  let maxWord = "";
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < word[i].length; j++) {
      //計算單字內"每字元的分數"
      const score = word[i][j].charCodeAt(0) - 96; //word[i][j]  跟 word.split("")[j]  都能取到單字內字元
      if (score > maxScore) {
        //紀錄目前的最高分與該字
        maxScore = score;
        maxWord = word[i];
      }
    }
  }
  return maxWord;
}

console.log(highestScoreWord("lorem ipsum dolor sit amet")); // 印出 ipsum
console.log(highestScoreWord("heyn i need a rubygem up to build this")); // 印出 rubygem
console.log(highestScoreWord("in time machine there are some bugs")); // 印出 there
