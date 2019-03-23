function stairsIn20(s) {
  let totals = s.map(el => {
    return el.reduce((acc, el) => acc + el);
  });
  return totals.reduce((acc, el) => acc + el) * 20;
}
