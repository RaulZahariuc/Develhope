function multiplyByTwo(value) {
  let number = 2;


  function inner() {

    return value * number;
  }

  return inner;
}

const closure = multiplyByTwo(4);


console.log(closure()); 
