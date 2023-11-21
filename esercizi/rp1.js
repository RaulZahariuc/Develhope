function somma(...numeri) {
    return numeri.reduce((acc, numero) => acc + numero, 0);
  }
  
  // Esempio di utilizzo della funzione
  const risultato = somma(1, 2, 3, 4, 5);
  
  // Stampa il risultato in console
  console.log("La somma è:", risultato);
  