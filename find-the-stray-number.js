function stray(numbers) {
  const freq = {}
  for (let i=0; i<numbers.length; i++) {
    let el = numbers[i]
    if (freq[el]) freq[el] += 1
    else freq[el] = 1
  }
  const single = Object.keys(freq).find(key => freq[key] === 1)
  return +single
}
