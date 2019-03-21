function parse(data) {
  let result = [];
  let count = 0;
  for (let cmd of data) {
    switch (cmd) {
      case "i":
        count += 1;
        break;
      case "d":
        count -= 1;
        break;
      case "s":
        count = count ** 2;
        break;
      case "o":
        result.push(count);
        break;
    }
  }
  return result;
}
