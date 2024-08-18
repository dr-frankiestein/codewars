function longestConsec(strarr, k) {
  if (strarr.length == 0 || k>strarr.length || k<=0) return ''

  const concatenated = []
  for (let i=0; i<=strarr.length-k; i++) {
    concatenated.push(strarr.slice(i, i+k).join(''))
  }
  
  return concatenated.sort((a,b) => a.length > b.length ? -1 : 1)[0]
}