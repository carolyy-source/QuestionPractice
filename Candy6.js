// 編號：CANDY-006
// 程式語言：JavaScript
// 題目：找出在數字陣列裡跟其它元素不一樣的值

function findDifferent(numbers) {
  // 若前兩個數字相等，那不一樣的數字就是與他們不同的
  if(numbers[0]===numbers[1]){
    for(let i = 2; i<numbers.length; i++){
      if(numbers[i] !== numbers[0]){
      return numbers[i];
      }
    }
  }
  //若前兩個不相等，確認前3個數字中誰不一樣
  else {
    if(numbers[2] === numbers[0]){
      return numbers[1];
    }
    else{
    return numbers[0];
    }
  }

}

console.log(findDifferent([1, 1, 1, 1, 3, 1, 1, 1])); // 印出 3
console.log(findDifferent([2, 2, 2, 4, 2, 2])); // 印出 4
console.log(findDifferent([8, 3, 3, 3, 3, 3, 3, 3])); // 印出 8