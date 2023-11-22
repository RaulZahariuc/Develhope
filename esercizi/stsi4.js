function lanciaDadi() {
    console.log("Lancio dei dadi in corso...");
  
    const dado1 = Math.floor(Math.random() * 6) + 1;
    const dado2 = Math.floor(Math.random() * 6) + 1;
  
    console.log(`Lancio dei dadi: Dado 1 = ${dado1}, Dado 2 = ${dado2}`);
  }
  
  setTimeout(lanciaDadi, 1000);
  