function betterThanAverage(classPoints, yourPoints) {
  let avg =
    classPoints.reduce((a, c) => a + c, yourPoints) / (classPoints.length + 1);

  return yourPoints > avg ? true : false;
}
