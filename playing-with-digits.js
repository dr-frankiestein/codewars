function digPow(n, p){
  let digits = n.toString().split('').map(Number)
  let sum = 0
  for (let i=0; i<digits.length; i++) {
    sum += digits[i]**(p+i)
  }
  return (sum/n)%1 == 0 ? sum/n : -1
}

// cleverer than mine, esp use of reduce

// function digPow(n, p) {
//   var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
//   return x % n ? -1 : x / n
// }