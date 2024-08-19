function alphabetPosition(text) {
  text = text
    .toLowerCase()
    .split('')
    .map((i)=>i.charCodeAt(0)-96)
    .filter(i => i>0 && i<=26)
    .join(' ')
  return text
}