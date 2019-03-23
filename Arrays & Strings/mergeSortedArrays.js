function mergeArrays(myArray, alicesArray) {
  let myLen = myArray.length;
  let aliceLen = alicesArray.length;
  let i = 0;
  let j = 0;
  let result = [];

  while (i < myLen && j < aliceLen) {
    if (myArray[i] <= alicesArray[j]) {
      result.push(myArray[i]);
      i++;
    } else {
      result.push(alicesArray[j]);
      j++;
    }
  }

  if (i < myLen) {
    return result.concat(myArray.slice(i, myLen));
  } else if (j < aliceLen) {
    return result.concat(alicesArray.slice(j, aliceLen));
  } else {
    return result;
  }
}
