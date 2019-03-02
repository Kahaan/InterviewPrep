function canTwoMoviesFillFlight(movieLengths, flightLength) {
  let movieHsh = {};
  movieLengths.forEach((movie, idx) => (movieHsh[movie] = idx));
  let i = 0;
  if (movieLengths.length === 1) return false;
  while (i < movieLengths.length) {
    let availableTime = flightLength - movieLengths[i];
    if (
      movieLengths[availableTime] !== null &&
      i !== movieLengths[availableTime]
    ) {
      return true;
    }
    i++;
  }
  return false;
}

// Better solution:
function canTwoMoviesFillFlight(movieLengths, flightLength) {
  // Movie lengths we've seen so far
  const movieLengthsSeen = new Set();

  for (let i = 0; i < movieLengths.length; i++) {
    const firstMovieLength = movieLengths[i];

    const matchingSecondMovieLength = flightLength - firstMovieLength;
    if (movieLengthsSeen.has(matchingSecondMovieLength)) {
      return true;
    }

    movieLengthsSeen.add(firstMovieLength);
  }

  // We never found a match, so return false
  return false;
}
