function scramble(str, arr) {
  let result = str.slice().split("");

  for (let i = 0; i < str.length; i++) {
    let idx = arr[i];
    let el = str[idx];
    result[arr[i]] = str[i];
  }

  return result.join("");
}
