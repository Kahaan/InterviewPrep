function mergeArrays(myArray, alicesArray) {
  let result = [];
  let shortestArr = myArray.length > alicesArray.length ? alicesArray : myArray;
  let longestArr = myArray.length > alicesArray.length ? myArray : alicesArray;
  let i = 0;
  while (i < shortestArr.length) {
    console.log(myArray[i], alicesArray[i]);
    if (myArray[i] <= alicesArray[i]) {
      result.push(myArray[i], alicesArray[i]);
    } else if (myArray[i] > alicesArray[i]) {
      result.push(alicesArray[i], myArray[i]);
    }
    i++;
  }
  return result.concat(longestArr.slice(i, longestArr.length));
  return result;
}
