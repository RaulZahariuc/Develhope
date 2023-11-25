function caricaModulo(modulo) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Il modulo ${modulo} è stato caricato.`);
      }, 2000);
    });
  }
  
  async function lanciaVeicoloSpaziale() {
    try {
      console.log("Inizio del caricamento del modulo A");
      const moduloA = await caricaModulo("A");
      console.log(moduloA);
  
      console.log("Inizio del caricamento del modulo B");
      const moduloB = await caricaModulo("B");
      console.log(moduloB);
  
      console.log("Inizio del caricamento del modulo C");
      const moduloC = await caricaModulo("C");
      console.log(moduloC);
  
      console.log("Veicolo spaziale pronto per il lancio!");
    } catch (errore) {
      console.error("Errore durante il caricamento dei moduli:", errore);
    }
  }
  
  lanciaVeicoloSpaziale();
  