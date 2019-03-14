function LongestWord(sen) {
  let words = sen.split(" ");
  words = words.map(word => clean(word));

  return words.sort((a, b) => b.length - a.length)[0];

  return words;
}

function clean(word) {
  return word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
}
