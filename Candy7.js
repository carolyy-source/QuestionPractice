
function findSomeDifferent(numbers) {
  // 只有奇數的陣列
  const odd = numbers.filter((e) => e %2 !== 0);
  // 只有偶數的陣列
  const even = numbers.filter((e) => e %2 === 0);
  if(odd.length > even.length){
    return even[0];
  }
  else{
    return odd[0];
  }
}

console.log(findSomeDifferent([2, 4, 0, 100, 4, 11, 2602, 36])); // 印出 11
console.log(findSomeDifferent([160, 3, 1719, 19, 11, 13, -21])); // 印出 160