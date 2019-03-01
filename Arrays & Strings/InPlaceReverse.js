function reverse(arrayOfChars) {
  let i = 1;
  let length = arrayOfChars.length;

  while (i < length) {
    currChar = arrayOfChars.splice(i, 1);
    arrayOfChars.unshift(...currChar);
    i += 1;
  }
  return arrayOfChars;
}

// TODO:  Since unshift is O(n) and is within the loop, and the loop is a different length than the arrayOfChars,
// Check if the problem is O(ab) or O(n^2)
