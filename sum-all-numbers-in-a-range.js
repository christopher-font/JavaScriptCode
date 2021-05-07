function sumAll(arr) {
  let low = arr.pop();
  let high = arr.pop();
  let sum = 0;

  if (low > high) {
    let temp = high;
    high = low;
    low = temp;
  }

  while (high >= low) {
    sum = high + sum;
    high = high - 1;
  }
  
  return sum;
}
sumAll([1, 4]);