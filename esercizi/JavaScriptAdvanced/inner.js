function printName() {
    // Dichiariamo una costante all interno della funzione 
    const helloName = "Hello John";
  
    // Dichiariamo una funzione all interno della funzione 
    function inner() {
      // Richiamiamo la variabile dalla prima funizone 
      return helloName;
    }
  
    // Richiamiamo la funzione esterna 
    return inner;
  }
  
  
  const closure = printName();
  
  
  setTimeout(function () {
    console.log(closure()); 
  }, 1000); 