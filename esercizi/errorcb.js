function performOperation(a, b, callback) {
    try {
      if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Entrambi gli argomenti devono essere numeri.');
      }
  
      const result = a + b;
      callback(null, result);
    } catch (error) {
      console.error("Errore durante l'esecuzione dell'operazione:", error.message);
      callback(error, null);
    }
  }
  
  function displayResult(error, result) {
    if (error) {
      console.error("Si è verificato un errore:", error.message);
    } else {
      console.log("Il risultato è:", result);
    }
  }
  
  performOperation(5, 3, displayResult);
  