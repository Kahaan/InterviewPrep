function sortScores(unorderedScores, highestPossibleScore) {
  let result = [];
  let i = 0;

  while (i < unorderedScores.length) {
    let pointsLost = highestPossibleScore - unorderedScores[i];
    if (result[pointsLost] == null) {
      result[pointsLost] = unorderedScores[i];
    } else {
      result[pointsLost + 1] = unorderedScores[i];
    }
    i++;
  }
  result = result.filter(el => {
    return el != null;
  });
  return result;
}
