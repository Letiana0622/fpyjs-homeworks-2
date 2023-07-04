
function prime(j) {
    for (let i = 2; i < j; i++) {
      if (j % i === 0) return false;
    }
    return j !== 1;
  }
  
function array(n) {
    arr = []
    i = 2
    while (arr.length < n) {
      if (prime(i)) {arr.push(i)}
      i++;
    }
    return arr;
}
  
  array(console.log(array(process.argv[2])));
