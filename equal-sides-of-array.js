function findEvenIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    let left = arr.slice(0, i).reduce((tot, a) => tot + a, 0);
    let right = arr.slice(i + 1).reduce((tot, a) => tot + a, 0);
    if (left == right) return i;
  }
  return -1;
}
