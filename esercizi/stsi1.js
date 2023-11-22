function visualizzaOrologio() {
  const orarioCorrente = new Date();
  const ore = orarioCorrente.getHours();
  const minuti = orarioCorrente.getMinutes();
  const secondi = orarioCorrente.getSeconds();
  
  console.log(`Ora attuale: ${ore}:${minuti}:${secondi}`);
}


const intervallo = setInterval(visualizzaOrologio, 1000);


setTimeout(() => {
  clearInterval(intervallo);
  console.log("Intervallo fermato dopo 5 secondi.");
}, 5000);

  