// DO AGAIN

function reverseOrder(arrayOfChars) {
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
  return arrayOfChars;
}

function reverseWords(message) {
  message = message.join("");
  let words = message.split(" ");
  words = reverseOrder(words);
}
