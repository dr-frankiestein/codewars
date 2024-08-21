var number = function (array) {
  for (let i in array) {
    array[i] = `${+i + 1}: ` + array[i];
  }
  return array;
};
