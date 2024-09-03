function nbDig(n, d) {
  const squares = [];
  for (let i = 0; i <= n; i++) squares.push(i ** 2);
  let onlyDs = squares
    .join("")
    .split("")
    .filter((x) => x == d);
  return onlyDs.length;
}
