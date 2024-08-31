function getSum(a, b) {
  //   if (a == b) return a;
  let [low, high] = [a, b].sort((a, b) => a - b);
  let sum = 0;
  while (low <= high) sum += low++;
  return sum;
}

console.log(getSum(599, 164));

console.log(getSum(5, -1));
console.log(getSum(6, 6));
