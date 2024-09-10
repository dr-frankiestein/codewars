function squareSum(numbers){
    return numbers.map((x=>x**2)).reduce((a, c)=>a+c, 0)
}