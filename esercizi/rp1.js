function somma(...numeri) {
    return numeri.reduce((acc, numero) => acc + numero, 0);
  }
  
  
  const risultato = somma(1, 2, 3, 4, 5);
  
 
  console.log("La somma è:", risultato);
  