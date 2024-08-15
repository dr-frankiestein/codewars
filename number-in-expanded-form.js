function expandedForm(num) {
  num = num.toString().split('').reverse()
  let arr = []
  
  for (let i = 0; i<num.length; i++) {
    if (num[i] > 0) arr.unshift(num[i] * 10**i)
  }

  return arr.join(' + ')
}