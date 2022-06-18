// To square(root) or not to square(root)

function squareOrSquareRoot(array) {
    return array.map(x => Math.sqrt(x) % 1? x * x : Math.sqrt(x))  
  }