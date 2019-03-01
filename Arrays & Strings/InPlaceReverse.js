function reverse(arrayOfChars) {
  let i = 1;
  let length = arrayOfChars.length;

  while (i < length) {
    currChar = arrayOfChars.splice(i, 1);
    arrayOfChars.unshift(...currChar);
    console.log(arrayOfChars);
    i += 1;
  }
  return arrayOfChars;
}
