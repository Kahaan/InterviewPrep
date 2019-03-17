function points(games) {
  let count = 0;
  games.map(el => {
    if (el[0] > el[2]) {
      return (count += 3);
    } else if (el[0] === el[2]) {
      return (count += 1);
    }
  });

  return count;
}
