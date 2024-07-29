function firstNonConsecutive (arr) {
  if (arr.length < 2) return null
  else {
    for (let i=1; i<=arr.length-1; i++) {
      if (arr[i] - arr[i-1] > 1) return arr[i]
    }
  return null
  }
}