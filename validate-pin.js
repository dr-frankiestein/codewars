function validatePIN (pin) {
  const length = pin.length == 4 || pin.length == 6
  const digitsOnly = /^\d+$/.test(pin)
  return (length && digitsOnly)

  // alt soln   
  // return /^(\d{4}|\d{6})$/.test(pin)

}