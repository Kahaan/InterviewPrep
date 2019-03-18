function caesarCipherEncryptor(string, key) {
  let charCodes = string.split("").map(l => l.charCodeAt(0) + key);

  charCodes = charCodes.map(code => {
    if (code > 122) {
      return 97 + (code % 123);
    } else {
      return code;
    }
  });
  return charCodes.map(code => String.fromCharCode(code)).join("");
}
