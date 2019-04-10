function reverseWords(arr) {
  // your code goes here
  let sen = arr.join("");
  let words = sen.split(" ");
  words = words.reverse();
  let result = [];
  words.map((word, ind) => {
    let char = word.split("");
    char.map(ch => result.push(ch));
    // is this the last index?
  });
  return result;
}
