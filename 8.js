function mergeArr(fArr, sArr) {
  let sorted = [];
  for (let i = 0; i < fArr.length && i < sArr.length; i++) {
    if (fArr[0] < sArr[0]) {
      sorted.push(fArr[i]);
    } else {
      sorted.push(sArr[i]);
    }
  }
  return [...sorted, ...fArr, ...sArr];
}

function divideArr(arr) {
  const half = arr.length / 2;
  if (arr.length < 2) {
    return arr;
  }
  let fArr = arr.splice(0, half);
  let sArr = arr;
  return mergeArr(divideArr(fArr), divideArr(sArr));
}

console.log(divideArr(prompt('Type an array of numbers to sort.')))