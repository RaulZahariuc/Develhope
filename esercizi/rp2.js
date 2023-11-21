function filterOutOdds(...numeri) {
    return numeri.filter(numero => numero % 2 === 0);
  }
  
 
  const numeriPari = filterOutOdds(17, 28, 39, 40, 52, 63, 75, 84, 98);
  
 
  console.log("Numeri pari:", numeriPari);
  