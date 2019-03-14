function AlphabetSoup(str) {
  let letters = str.split("");
  return letters.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join("");
}
