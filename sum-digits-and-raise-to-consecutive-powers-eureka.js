function sumDigPow(a, b) {
  const passes = [];
  for (i = a; i <= b; i++) {
    let test = (i) => {
      let digits = i.toString().split("");
      return digits.reduce((a, c, ix) => a + c ** (ix + 1), 0) === i;
    };
    if (test(i)) passes.push(i);
  }
  return passes;
}

// module.exports = { sumDigPow };
