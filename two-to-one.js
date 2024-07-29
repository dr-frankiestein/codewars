function longest(s1, s2) {
  let singleStr = s1.concat(s2)
  let sorted = singleStr.split('').sort()
  let unique = []
  for (let i=0; i<=sorted.length-1; i++) {
    if (sorted[i] !== sorted[i+1]) unique.push(sorted[i])
  }
  return unique.join('')
  
}