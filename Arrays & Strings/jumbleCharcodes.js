function LetterChanges(str) {
  if (str.length < 1) return "";

  let letters = str.split("");
  let charCodes = letters.map(el => el.charCodeAt(0));
  for (let i = 0; i < charCodes.length; i++) {
    if (
      charCodes[i] >= "A".charCodeAt(0) &&
      (charCodes[i] <= "z".charCodeAt(0) &&
        ![91, 92, 93, 94, 95, 96].includes(charCodes[i]))
    )
      charCodes[i] += 1;
  }

  charCodes = charCodes.map(el => String.fromCharCode(el));

  charCodes = charCodes.map((el, i) => {
    if ("aeiou".includes(el)) {
      return (charCodes[i] = el.toUpperCase());
    } else {
      return (charCodes[i] = el);
    }
  });

  return charCodes.join("");
}
