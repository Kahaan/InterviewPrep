function SimpleSymbols(str) {
  let letters = "abcdefghijklmnopqrstuvwxyz";
  str = str.toLowerCase();
  if (letters.includes(str[0])) return "false";
  if (letters.includes(str[str.length - 1])) return "false";
  for (let i = 0; i < str.length; i++) {
    if (letters.includes(str[i])) {
      if (letters.includes(str[i - 1]) || letters.includes(str[i + 1])) {
        return "false";
      }
    }
  }

  return "true";
}
