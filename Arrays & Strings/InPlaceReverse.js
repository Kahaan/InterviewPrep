function reverse(arrayOfChars) {
  let i = 1;
  let length = arrayOfChars.length;
  // length is required since arrayOfChars is being modified
  while (i < length) {
    currChar = arrayOfChars.splice(i, 1);
    arrayOfChars.unshift(...currChar);
    i += 1;
  }
  return arrayOfChars;
}

// TODO:  Since unshift is O(n) and is within the loop, and the loop is a different length than the arrayOfChars,
// Check if the problem is O(ab) or O(n^2)

// MORE OPTIMAL SOLUTION:

function reverse(arrayOfChars) {
  let leftIndex = 0;
  let rightIndex = arrayOfChars.length - 1;
  // Both left and right index are outside the loop to ensure they don't change

  while (leftIndex < rightIndex) {
    // Swap characters
    const temp = arrayOfChars[leftIndex];
    arrayOfChars[leftIndex] = arrayOfChars[rightIndex];
    arrayOfChars[rightIndex] = temp;

    // Move towards middle
    leftIndex++;
    rightIndex--;
  }
}
